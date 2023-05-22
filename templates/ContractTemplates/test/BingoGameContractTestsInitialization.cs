using AElf.Contracts.MultiToken;
using AElf.Cryptography.ECDSA;
using AElf.Kernel.Token;
using AElf.Types;

namespace AElf.Contracts.BingoGameContract
{
    public partial class BingoGameContractTests
    {
        // private readonly ECKeyPair KeyPair;
        private readonly BingoGameContractContainer.BingoGameContractStub BingoGameContractStub;
        private readonly TokenContractContainer.TokenContractStub TokenContractStub;
        protected ECKeyPair DefaultKeyPair => Accounts[0].KeyPair;
        protected Address DefaultAddress => Accounts[0].Address;
        protected ECKeyPair UserKeyPair => Accounts[1].KeyPair;
        protected Address UserAddress => Accounts[1].Address;

        public BingoGameContractTests()
        {
            // KeyPair = SampleAccount.Accounts.First().KeyPair;
            BingoGameContractStub = GetContractStub<BingoGameContractContainer.BingoGameContractStub>(DefaultKeyPair);
            TokenContractStub = GetTester<TokenContractContainer.TokenContractStub>(
                GetAddress(TokenSmartContractAddressNameProvider.StringName), DefaultKeyPair);
        }
    }
    
}