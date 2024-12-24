using NUnit.Framework;
using ProtoBuf;
using System.IO;

namespace AElf.Tools.Test
{
    [ProtoContract]
    public class TestProtoMessage
    {
        [ProtoMember(1)]
        public string Name { get; set; }
        
        [ProtoMember(2)]
        public int Id { get; set; }
    }

    public class ProtobufNetSerializationTest
    {
        [Test]
        public void Serialize_ValidMessage_CanBeDeserialized()
        {
            // Arrange
            var message = new TestProtoMessage 
            { 
                Name = "Test",
                Id = 123 
            };

            // Act
            byte[] serialized;
            using (var ms = new MemoryStream())
            {
                Serializer.Serialize(ms, message);
                serialized = ms.ToArray();
            }

            TestProtoMessage deserialized;
            using (var ms = new MemoryStream(serialized))
            {
                deserialized = Serializer.Deserialize<TestProtoMessage>(ms);
            }

            // Assert
            Assert.That(deserialized.Name, Is.EqualTo("Test"));
            Assert.That(deserialized.Id, Is.EqualTo(123));
        }

        [Test]
        public void Serialize_EmptyMessage_CanBeDeserialized()
        {
            // Arrange
            var message = new TestProtoMessage();

            // Act
            byte[] serialized;
            using (var ms = new MemoryStream())
            {
                Serializer.Serialize(ms, message);
                serialized = ms.ToArray();
            }

            TestProtoMessage deserialized;
            using (var ms = new MemoryStream(serialized))
            {
                deserialized = Serializer.Deserialize<TestProtoMessage>(ms);
            }

            // Assert
            Assert.That(deserialized.Name, Is.Null);
            Assert.That(deserialized.Id, Is.EqualTo(0));
        }
    }
} 