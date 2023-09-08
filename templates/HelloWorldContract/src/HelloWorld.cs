using AElf.Sdk.CSharp;
using Google.Protobuf.WellKnownTypes;

namespace AElf.Contracts.HelloWorld
{
    // Contract class must inherit the class generated by the proto file
    public class HelloWorld : HelloWorldContainer.HelloWorldBase
    {
        const string author = "xibo";
        // Method to update the message value. 
        public override Empty Update(StringValue input)
        {
            // Set the message value in the contract state
            State.Message.Value = input.Value;
            // Emit an event to notify listeners about the something happened during the execution of this method
            Context.Fire(new UpdatedMessage
            {
                Value = input.Value
            });
            // Return an empty response
            return new Empty();
        }

        // Method to read the current message value
        public override StringValue Read(Empty input)
        {
            // Retrieve the value from the state
            var value = State.Message.Value;
            // Return value retrieved
            return new StringValue
            {
                Value = value
            };
        }
    }
    
}