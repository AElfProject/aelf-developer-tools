using AElf.Cryptography.ECDSA;
using AElf.CSharp.Core;
using AElf.Kernel;
using AElf.Kernel.Blockchain.Application;
using AElf.Kernel.SmartContract.Application;
using AElf.Sdk.CSharp;
using AElf.Types;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Threading;

namespace AElf.Testing.TestBase
{
    public class ContractTestBase<TContract> : DAppContractTestBase<ContractTestModule<TContract>>
        where TContract : CSharpSmartContractAbstract
    {
        // You can get address of any contract via GetAddress method, for example:
        // internal Address DAppContractAddress => GetAddress(DAppSmartContractAddressNameProvider.StringName);
    
        protected TStub GetContractStub<TStub>(ECKeyPair senderKeyPair) where TStub : ContractStubBase, new()
        {
            return GetTester<TStub>(DAppContractAddress, senderKeyPair);
        }
    }
    
    public class DAppContractTestBase<TModule> : ContractTestBase.ContractTestKit.ContractTestBase<TModule> where TModule : AbpModule
    {
        protected Address DAppContractAddress => GetAddress(SmartContractAddressNameProvider.StringName);

        protected Address GetAddress(string contractStringName)
        {
            var addressService = Application.ServiceProvider.GetRequiredService<ISmartContractAddressService>();
            var blockchainService = Application.ServiceProvider.GetRequiredService<IBlockchainService>();
            var chain = AsyncHelper.RunSync(blockchainService.GetChainAsync);
            var address = AsyncHelper.RunSync(() => addressService.GetSmartContractAddressAsync(new ChainContext
            {
                BlockHash = chain.BestChainHash,
                BlockHeight = chain.BestChainHeight
            }, contractStringName)).SmartContractAddress.Address;
            return address;
        }
    }
    
}