using System.Collections.Generic;
using System.IO;
using AElf.Boilerplate.TestBase.DAppContract;
using AElf.ContractTestBase;
using AElf.Kernel.SmartContract.Application;
using AElf.Sdk.CSharp;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp;
using Volo.Abp.Modularity;

namespace AElf.Boilerplate.TestBase.Contract
{
    [DependsOn(typeof(MainChainDAppContractTestModule))]
    public class ContractTestModule<T> : MainChainDAppContractTestModule where T : CSharpSmartContractAbstract 
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddSingleton<IContractInitializationProvider, ContractInitializationProvider<T>>();

            context.Services.RemoveAll<IPreExecutionPlugin>();
            context.Services.RemoveAll<IPostExecutionPlugin>();
        }

        public override void OnPreApplicationInitialization(ApplicationInitializationContext context)
        {
            var contractCodeProvider = context.ServiceProvider.GetService<IContractCodeProvider>();
            var contractDllLocation = typeof(T).Assembly.Location;
            var contractCodes = new Dictionary<string, byte[]>(contractCodeProvider.Codes)
            {
                {
                    new ContractInitializationProvider<T>().ContractCodeName,
                    File.ReadAllBytes(contractDllLocation)
                }
            };
            contractCodeProvider.Codes = contractCodes;
        }
    }
}