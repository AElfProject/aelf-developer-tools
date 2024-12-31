using NUnit.Framework;
using ProtoBuf;
using System.IO;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;
using Moq;
using System;
using System.Collections.Generic;

namespace AElf.Tools.Test
{
    public class ProtobufNetGeneratorTest
    {
        private Mock<IBuildEngine> _mockEngine;
        private Mock<ITask> _mockTask;
        private TaskLoggingHelper _logger;

        [SetUp]
        public void Setup()
        {
            _mockEngine = new Mock<IBuildEngine>();
            _mockTask = new Mock<ITask>();
            _mockTask.Setup(t => t.BuildEngine).Returns(_mockEngine.Object);
            
            _logger = new TaskLoggingHelper(_mockTask.Object);
            
            if (!Directory.Exists("output"))
            {
                Directory.CreateDirectory("output");
            }
        }

        [Test]
        public void GenerateCode_ValidProtoFile_GeneratesValidCSharp()
        {
            // Arrange
            var protoContent = @"
syntax = ""proto3"";
package test;
message TestMessage {
    string name = 1;
    int32 id = 2;
}";
            var protoFile = "test.proto";
            File.WriteAllText(protoFile, protoContent);

            // Act
            var generator = new ProtoGenerator(_logger);
            var result = generator.GenerateCode(protoFile, "output");

            // Assert
            Assert.That(result, Is.True, "Code generation should succeed");
            var generatedCode = File.ReadAllText("output/test.generated.cs");
            Assert.That(generatedCode, Does.Contain("public class TestMessage"));
            Assert.That(generatedCode, Does.Contain("public string Name"));
            Assert.That(generatedCode, Does.Contain("public int Id"));
        }

        [Test]
        public void GenerateCode_WithNestedMessage_GeneratesNestedClasses()
        {
            // Arrange
            var protoContent = @"
syntax = ""proto3"";
package test;
message Outer {
    message Inner {
        string name = 1;
    }
    Inner inner = 1;
}";
            var protoFile = "nested.proto";
            File.WriteAllText(protoFile, protoContent);

            // Act
            var generator = new ProtoGenerator(_logger);
            var result = generator.GenerateCode(protoFile, "output");

            // Assert
            Assert.That(result, Is.True, "Code generation should succeed");
            var generatedCode = File.ReadAllText("output/nested.generated.cs");
            Assert.That(generatedCode, Does.Contain("public class Outer"));
            Assert.That(generatedCode, Does.Contain("public class Inner"));
            Assert.That(generatedCode, Does.Contain("public Inner InnerMessage"));
        }

        [Test]
        public void GenerateCode_WithService_GeneratesServiceInterface()
        {
            // Arrange
            var protoContent = @"
syntax = ""proto3"";
package test;
message Request { string data = 1; }
message Response { string result = 1; }
service TestService {
    rpc TestMethod (Request) returns (Response);
}";
            var protoFile = "service.proto";
            File.WriteAllText(protoFile, protoContent);

            // Capture logs
            var loggedMessages = new List<string>();
            var loggedErrors = new List<string>();
            _mockEngine.Setup(e => e.LogMessageEvent(It.IsAny<BuildMessageEventArgs>()))
                .Callback<BuildMessageEventArgs>(e => loggedMessages.Add(e.Message));
            _mockEngine.Setup(e => e.LogErrorEvent(It.IsAny<BuildErrorEventArgs>()))
                .Callback<BuildErrorEventArgs>(e => loggedErrors.Add(e.Message));

            // Act
            var generator = new ProtoGenerator(_logger);
            var result = generator.GenerateCode(protoFile, "output");

            foreach (var msg in loggedMessages)
            {
                Console.WriteLine($"  {msg}");
            }
            Console.WriteLine("Logged Errors:");
            foreach (var err in loggedErrors)
            {
                Console.WriteLine($"  {err}");
            }

            // Assert
            Assert.That(result, Is.True, $"Code generation failed. Errors: {string.Join(Environment.NewLine, loggedErrors)}");
            var generatedCode = File.ReadAllText("output/service.generated.cs");
            Assert.That(generatedCode, Does.Contain("public interface ITestService"));
            Assert.That(generatedCode, Does.Contain("Task<Response> TestMethodAsync"));
        }

        [TearDown]
        public void Cleanup()
        {
            // Clean up test proto files
            var testFiles = new[] { "test.proto", "nested.proto", "enum.proto", "service.proto" };
            foreach (var file in testFiles)
            {
                if (File.Exists(file))
                {
                    File.Delete(file);
                }
                var generatedFile = Path.Combine("output", Path.GetFileNameWithoutExtension(file) + ".generated.cs");
                if (File.Exists(generatedFile))
                {
                    File.Delete(generatedFile);
                }
            }
            if (Directory.Exists("output"))
            {
                Directory.Delete("output", true);
            }
        }
    }
} 