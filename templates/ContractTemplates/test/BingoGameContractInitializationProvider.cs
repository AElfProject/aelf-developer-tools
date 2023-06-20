using System.Collections.Generic;
using AElf.Kernel.SmartContract.Application;
using AElf.Testing.TestBase;
using AElf.Types;

namespace AElf.Contracts.BingoGameContract
{
    public class BingoGameContractInitializationProvider : IContractInitializationProvider
    {
        public List<ContractInitializationMethodCall> GetInitializeMethodList(byte[] contractCode)
        {
            return new List<ContractInitializationMethodCall>();
        }

        public Hash SystemSmartContractName { get; } = SmartContractAddressNameProvider.Name;
        public string ContractCodeName { get; } = "AElf.Contracts.BingoGameContract";
    }
    
}