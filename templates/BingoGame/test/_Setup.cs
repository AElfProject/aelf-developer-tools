﻿using AElf.Cryptography.ECDSA;
using AElf.CSharp.Core;
using AElf.Testing.TestBase;

namespace Portkey.Contracts.BingoGameContract
{
    public class Module : ContractTestModule<BingoGameContract>
    {
        
    }
    public class TestBase : ContractTestBase<Module>
    {
        // You can get address of any contract via GetAddress method, for example:
        // internal Address DAppContractAddress => GetAddress(DAppSmartContractAddressNameProvider.StringName);
        protected TStub GetContractStub<TStub>(ECKeyPair senderKeyPair) where TStub:ContractStubBase, new()
        {
            return GetTester<TStub>(ContractAddress, senderKeyPair);
        }
    }
    
}