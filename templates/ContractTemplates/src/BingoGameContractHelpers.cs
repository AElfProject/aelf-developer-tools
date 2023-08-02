namespace AElf.Contracts.BingoGameContract
{
    // This class is used to write some tool methods.
    public partial class BingoGameContract
    {
        private BingoType GetDiceNumSumResult(int bitArraySum)
        {
            Assert(bitArraySum is >= 3 and <= 18, $"random number: {bitArraySum} error");
            if (bitArraySum < 11)
            {
                return BingoType.Small;
            }

            return BingoType.Large;
        }

        private bool GetResult(BingoType bitArraySumResult, BingoType type)
        {
            return bitArraySumResult == type;
        }
    }
}