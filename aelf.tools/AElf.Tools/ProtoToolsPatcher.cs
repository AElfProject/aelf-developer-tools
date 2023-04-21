using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace AElf.Tools;

public class ProtoToolsPatcher : Task
{

    public override bool Execute()
    {
        // 加载程序集
        Assembly assembly = Assembly.Load(new AssemblyName("AElf.ContractDeployer.dll"));
        // 获取 Program 类型
        Type programType = assembly.GetType("AElf.ContractDeployer.Program");
        // 获取 Main 方法
        MethodInfo mainMethod = programType.GetMethod("Main", BindingFlags.Static | BindingFlags.NonPublic);
        // 构建option参数
        var optionsType = assembly.GetType("AElf.ContractDeployer.Program+Options");
        var optionsInstance = Activator.CreateInstance(optionsType);
        optionsType.GetProperty("ContractDllPath").SetValue(optionsInstance, "*.dll");
        optionsType.GetProperty("IsSystemContract").SetValue(optionsInstance, true);
        var args = new[] { optionsInstance };
        // 调用 Main 方法
        if (mainMethod != null) mainMethod.Invoke(null, new object[] {args});
        return true;
    }

}