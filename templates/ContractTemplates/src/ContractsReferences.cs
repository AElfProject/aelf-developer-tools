using AElf.Contracts.Consensus.AEDPoS;
using AElf.Contracts.MultiToken;

namespace AElf.Contracts.BingoGameContract
{
    public partial class BingoGameContractState
    {
        internal TokenContractContainer.TokenContractReferenceState TokenContract { get; set; }
        internal RandomNumberAccessorContractContainer.RandomNumberAccessorContractReferenceState RandomNumberAccessor { get; set; }
    }
}