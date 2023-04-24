// using System;
// using System.Collections.Generic;
// using System.IO;
// using System.Linq;
// using System.Reflection;
// using System.Threading;
// using Microsoft.Build.Framework;
// using Microsoft.Build.Utilities;
//
// namespace AElf.Tools;
//
// public class ProtoToolsPatcher : Task
// {
//
//     public override bool Execute()
//     {
//         Assembly assembly = Assembly.Load(new AssemblyName("AElf.ContractDeployer.dll"));
//         Type programType = assembly.GetType("AElf.ContractDeployer.Program");
//         MethodInfo mainMethod = programType.GetMethod("Main", BindingFlags.Static | BindingFlags.NonPublic);
//         var optionsType = assembly.GetType("AElf.ContractDeployer.Program+Options");
//         var optionsInstance = Activator.CreateInstance(optionsType);
//         optionsType.GetProperty("ContractDllPath").SetValue(optionsInstance, "*.dll");
//         optionsType.GetProperty("IsSystemContract").SetValue(optionsInstance, true);
//         var args = new[] { optionsInstance };
//         if (mainMethod != null) mainMethod.Invoke(null, new object[] {args});
//         return true;
//     }
//
// }