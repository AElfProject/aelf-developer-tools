using System.Collections.Generic;
using AElf.Boilerplate.TestBase.DAppContract;

using AElf.ContractTestBase;
using AElf.Kernel.SmartContract.Application;
using AElf.Types;
using Portkey.Contracts.BingoGameContract;

namespace Portkey.Contracts.CA;

   public class SideChainDAppContractTestDeploymentListProvider : SideChainContractDeploymentListProvider, IContractDeploymentListProvider
    {
        public List<Hash> GetDeployContractNameList()
        {
            var list = base.GetDeployContractNameList();
            list.Add(DAppSmartContractAddressNameProvider.Name);
            return list;
        }
    }
    
    public class MainChainDAppContractTestDeploymentListProvider : MainChainContractDeploymentListProvider, IContractDeploymentListProvider
    {
        public List<Hash> GetDeployContractNameList()
        {
            var list = base.GetDeployContractNameList();
            list.Add(DAppSmartContractAddressNameProvider.Name);
            return list;
        }
    }