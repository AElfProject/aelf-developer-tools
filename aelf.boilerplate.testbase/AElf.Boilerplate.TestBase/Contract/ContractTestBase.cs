using AElf.Boilerplate.TestBase.DAppContract;
using AElf.Cryptography.ECDSA;
using AElf.CSharp.Core;
using AElf.Sdk.CSharp;

namespace AElf.Boilerplate.TestBase.Contract
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
}