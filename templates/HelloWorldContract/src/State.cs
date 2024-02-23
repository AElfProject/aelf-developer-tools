using AElf.Sdk.CSharp.State;

namespace ContractNamespacePlaceholder
{
    // The state class is access the blockchain state
    public partial class State : ContractState 
    {
        // A state that holds string value
        public StringState Message { get; set; }
    }
}