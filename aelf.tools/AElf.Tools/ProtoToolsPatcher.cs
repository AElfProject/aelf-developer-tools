using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;
using Mono.Cecil;

namespace AElf.Tools;

public class ProtoToolsPatcher : Task
{
    [Required] public bool SkipAudit { get; set; }

    [Required] public bool Overwrite { get; set; }

    [Required] public bool IsSystemContract { get; set; }

    [Required] public string ContractDllPath { get; set; }
    
    private readonly IPolicy _policy;


    public override bool Execute()
    {
        string saveAsPath;

        if (!File.Exists(ContractDllPath))
        {
            Console.WriteLine($"error: Contract DLL cannot be found in specified path {ContractDllPath}");
            return false;
        }

        if (Overwrite)
        {
            saveAsPath = ContractDllPath;
            Console.WriteLine($"[CONTRACT-PATCHER] Overwriting {saveAsPath}");
        }
        else
        {
            saveAsPath = ContractDllPath + ".patched";
            Console.WriteLine($"[CONTRACT-PATCHER] Saving as {saveAsPath}");
        }
        var patchedCode = Patch(File.ReadAllBytes(ContractDllPath), IsSystemContract);
        if (!SkipAudit)
            try
            {
                Audit(patchedCode, IsSystemContract);
            }
            catch (CSharpCodeCheckException ex)
            {
                foreach (var finding in ex.Findings)
                    // Print error in parsable format so that it can be shown in IDE
                    Console.WriteLine($"error: {finding}");
            }

        File.WriteAllBytes(saveAsPath, patchedCode);
        return true;
    }
    
    
    private byte[] Patch(byte[] code, bool isSystemContract)
    {
        var assemblyDef = AssemblyDefinition.ReadAssembly(new MemoryStream(code));
        Patch(assemblyDef.MainModule, isSystemContract);
        var newCode = new MemoryStream();
        assemblyDef.Write(newCode);
        return newCode.ToArray();
    }
    
    private void Patch<T>(T t, bool isSystemContract)
    {
        var patchers = _policy.GetPatchers<T>().Where(p => !p.SystemContactIgnored || !isSystemContract).ToList();
        patchers.ForEach(v => v.Patch(t));
    }
    
    private void Audit(byte[] code, bool isSystemContract)
    {
        var findings = new List<ValidationResult>();
        var asm = Assembly.Load(code);
        var modDef = ModuleDefinition.ReadModule(new MemoryStream(code));
        var cts = new CancellationTokenSource(CodeOpsOptionsMonitor?.CurrentValue.AuditTimeoutDuration ??
                                              Constants.DefaultAuditTimeoutDuration);
        // Run module validators
        findings.AddRange(Validate(modDef, cts.Token, isSystemContract));

        // Run assembly validators (run after module validators since we invoke BindService method below)
        findings.AddRange(Validate(asm, cts.Token, isSystemContract));

        // Run method validators
        foreach (var type in modDef.Types)
        {
            findings.AddRange(ValidateMethodsInType(type, cts.Token, isSystemContract));
        }

        // Perform ACS validation
        if (requiredAcs != null)
            findings.AddRange(_acsValidator.Validate(asm, requiredAcs));

        if (findings.Count > 0)
        {
            throw new CSharpCodeCheckException(
                $"Contract code did not pass audit. Audit failed for contract: {modDef.Assembly.MainModule.Name}\n" +
                string.Join("\n", findings), findings);
        }
    }
}