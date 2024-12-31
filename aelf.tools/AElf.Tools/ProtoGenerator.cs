using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using Microsoft.Build.Utilities;
using Microsoft.Build.Framework;

namespace AElf.Tools
{
    public class ProtoGenerator
    {
        private readonly TaskLoggingHelper _log;

        public ProtoGenerator(TaskLoggingHelper log)
        {
            _log = log;
        }

        public bool GenerateCode(string protoFile, string outputDir, string language = "csharp")
        {
            try
            {
                _log.LogMessage(MessageImportance.High, $"Reading proto file: {protoFile}");
                var protoContent = File.ReadAllText(protoFile);
                // _log.LogMessage(MessageImportance.High, $"Proto content:\n{protoContent}");

                // Create output directory if it doesn't exist
                Directory.CreateDirectory(outputDir);

                // Generate code based on language
                var code = language.ToLowerInvariant() switch
                {
                    "csharp" => GenerateCSharpCode(protoContent),
                    _ => throw new ArgumentException($"Unsupported language: {language}")
                };

                // Check if code generation failed
                if (code == null)
                {
                    _log.LogError("Code generation failed - no output generated");
                    return false;
                }

                var outputFile = Path.Combine(outputDir, 
                    Path.GetFileNameWithoutExtension(protoFile) + ".generated.cs");

                File.WriteAllText(outputFile, code);
                // _log.LogMessage(MessageImportance.High, $"Generated code:\n{code}");
                return true;
            }
            catch (Exception ex)
            {
                _log.LogError($"Failed to generate code for {protoFile}: {ex.Message}");
                _log.LogMessage(MessageImportance.High, ex.StackTrace);
                return false;
            }
        }

        private string GenerateCSharpCode(string protoContent)
        {
            if (string.IsNullOrWhiteSpace(protoContent))
            {
                _log.LogError("Empty proto content provided");
                return null;
            }

            var sb = new StringBuilder();
            
            // Add standard using statements
            sb.AppendLine("using System;");
            sb.AppendLine("using System.Threading.Tasks;");
            sb.AppendLine("using ProtoBuf;");
            sb.AppendLine();
            
            // Start namespace
            sb.AppendLine("namespace Generated {");

            try
            {
                // Parse proto content
                var parser = new ProtoParser(_log);
                var definition = parser.Parse(protoContent);

                if (definition == null)
                {
                    _log.LogError("Failed to parse proto content");
                    return null;
                }

                // Generate code for messages first (since they're used by services)
                foreach (var message in definition.Messages)
                {
                    GenerateMessage(sb, message, "    ");
                }

                // Generate code for enums
                foreach (var enumType in definition.Enums)
                {
                    GenerateEnum(sb, enumType, "    ");
                }

                // Generate code for services
                foreach (var service in definition.Services)
                {
                    GenerateService(sb, service, "    ");
                }

                // Close namespace
                sb.AppendLine("}");

                var result = sb.ToString();
                // _log.LogMessage(MessageImportance.High, $"Generated C# code:\n{result}");
                return result;
            }
            catch (Exception ex)
            {
                _log.LogError($"Error generating C# code: {ex.Message}");
                _log.LogError($"Stack trace: {ex.StackTrace}");
                return null;
            }
        }

        private void GenerateMessage(StringBuilder sb, ProtoMessage message, string indent)
        {
            sb.AppendLine($"{indent}[ProtoContract]");
            sb.AppendLine($"{indent}public class {message.Name}");
            sb.AppendLine($"{indent}{{");

            foreach (var field in message.Fields)
            {
                sb.AppendLine($"{indent}    [ProtoMember({field.Number})]");
                var propertyName = ToPascalCase(field.Name);
                if (field.Type == propertyName)
                {
                    propertyName += "Message";
                }
                sb.AppendLine($"{indent}    public {GetCSharpType(field.Type)} {propertyName} {{ get; set; }}");
            }

            // Handle nested messages
            foreach (var nestedMessage in message.NestedMessages)
            {
                sb.AppendLine();
                GenerateMessage(sb, nestedMessage, indent + "    ");
            }

            sb.AppendLine($"{indent}}}");
            sb.AppendLine();
        }

        private void GenerateEnum(StringBuilder sb, ProtoEnum protoEnum, string indent)
        {
            sb.AppendLine($"{indent}public enum {protoEnum.Name}");
            sb.AppendLine($"{indent}{{");

            foreach (var value in protoEnum.Values)
            {
                sb.AppendLine($"{indent}    {value.Name} = {value.Number},");
            }

            sb.AppendLine($"{indent}}}");
            sb.AppendLine();
        }

        private void GenerateService(StringBuilder sb, ProtoService service, string indent)
        {
            try
            {
                _log.LogMessage(MessageImportance.High, $"Generating service interface: I{service.Name}");
                
                // Generate service interface
                sb.AppendLine($"{indent}public interface I{service.Name}");
                sb.AppendLine($"{indent}{{");

                foreach (var method in service.Methods)
                {
                    var methodName = $"{method.Name}Async";
                    _log.LogMessage(MessageImportance.High, $"Generating method: {methodName}");
                    sb.AppendLine($"{indent}    Task<{method.OutputType}> {methodName}({method.InputType} request);");
                }

                sb.AppendLine($"{indent}}}");
                sb.AppendLine();
            }
            catch (Exception ex)
            {
                _log.LogError($"Error generating service {service.Name}: {ex.Message}");
                throw;
            }
        }

        private string GetCSharpType(string protoType)
        {
            return protoType.ToLower() switch
            {
                "string" => "string",
                "int32" => "int",
                "int64" => "long",
                "bool" => "bool",
                "double" => "double",
                "float" => "float",
                "bytes" => "byte[]",
                _ => protoType // Use as-is for message types
            };
        }

        private string ToPascalCase(string name)
        {
            if (string.IsNullOrEmpty(name))
                return name;

            // Split by underscores and convert each part
            var parts = name.Split('_');
            for (var i = 0; i < parts.Length; i++)
            {
                if (parts[i].Length > 0)
                {
                    parts[i] = char.ToUpper(parts[i][0]) + parts[i].Substring(1).ToLower();
                }
            }
            return string.Join("", parts);
        }
    }

    internal class ProtoParser
    {
        private readonly TaskLoggingHelper _log;
        private int _currentLine;
        private string[] _lines;

        public ProtoParser(TaskLoggingHelper log)
        {
            _log = log;
        }

        public ProtoDefinition Parse(string content)
        {
            var definition = new ProtoDefinition();
            _lines = content.Split(new[] { "\r\n", "\n" }, StringSplitOptions.None);
            _currentLine = 0;

            while (_currentLine < _lines.Length)
            {
                var line = _lines[_currentLine].Trim();
                // _log.LogMessage(MessageImportance.High, $"Parsing line {_currentLine}: {line}");

                if (string.IsNullOrWhiteSpace(line) || line.StartsWith("//") || line.StartsWith("syntax") || line.StartsWith("package"))
                {
                    _currentLine++;
                    continue;
                }

                if (line.StartsWith("message "))
                {
                    var message = ParseMessage();
                    _log.LogMessage(MessageImportance.High, $"Parsed message: {message.Name}");
                    definition.Messages.Add(message);
                }
                else if (line.StartsWith("enum "))
                {
                    var enumType = ParseEnum();
                    _log.LogMessage(MessageImportance.High, $"Parsed enum: {enumType.Name}");
                    definition.Enums.Add(enumType);
                }
                else if (line.StartsWith("service "))
                {
                    var service = ParseService();
                    _log.LogMessage(MessageImportance.High, $"Parsed service: {service.Name}");
                    definition.Services.Add(service);
                }
                else
                {
                    _currentLine++;
                }
            }

            return definition;
        }

        private ProtoMessage ParseMessage()
        {
            var line = _lines[_currentLine].Trim();
            _log.LogMessage(MessageImportance.High, $"Parsing message: {line}");

            var messageParts = line.Split(new[] { '{' }, StringSplitOptions.RemoveEmptyEntries);
            var messageDeclaration = messageParts[0].Trim();
            var name = messageDeclaration.Split(' ')[1].Trim();

            var message = new ProtoMessage { Name = name };
            _log.LogMessage(MessageImportance.High, $"Created message: {message.Name}");

            if (messageParts.Length > 1)
            {
                var fieldsText = messageParts[1].TrimEnd('}').Trim();
                var fieldTexts = fieldsText.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (var fieldText in fieldTexts)
                {
                    var fieldLine = fieldText.Trim();
                    if (!string.IsNullOrWhiteSpace(fieldLine))
                    {
                        if (fieldLine.StartsWith("option"))
                        {
                            // Parse the option line
                            var optionParts = fieldLine.Split(new[] { '=', ';' }, StringSplitOptions.RemoveEmptyEntries);
                            if (optionParts.Length == 2)
                            {
                                var optionName = optionParts[0].Trim();
                                var optionValue = optionParts[1].Trim();
                                message.Options.Add(new ProtoOption { Name = optionName, Value = optionValue });
                            }
                            continue; // Continue to the next line
                        }
                        ParseAndAddField(message, fieldLine);
                    }
                }
                _currentLine++;
                return message;
            }

            _currentLine++;

            while (_currentLine < _lines.Length)
            {
                line = _lines[_currentLine].Trim();
                _log.LogMessage(MessageImportance.High, $"Message line: {line}");

                if (line == "}")
                {
                    _currentLine++;
                    break;
                }

                if (line.StartsWith("option"))
                {
                    var optionParts = line.Split(new[] { '=', ';' }, StringSplitOptions.RemoveEmptyEntries);
                    if (optionParts.Length == 2)
                    {
                        var optionName = optionParts[0].Trim();
                        var optionValue = optionParts[1].Trim();
                        message.Options.Add(new ProtoOption { Name = optionName, Value = optionValue });
                    }
                    _currentLine++;
                    continue; // Continue to the next line
                }

                if (line.StartsWith("message "))
                {
                    var nestedMessage = ParseMessage();
                    _log.LogMessage(MessageImportance.High, $"Added nested message: {nestedMessage.Name}");
                    message.NestedMessages.Add(nestedMessage);
                    continue;
                }

                if (!string.IsNullOrWhiteSpace(line) && !line.StartsWith("//"))
                {
                    ParseAndAddField(message, line);
                }

                _currentLine++;
            }

            return message;
        }

        private void ParseAndAddField(ProtoMessage message, string line)
        {
            try
            {
                var parts = line.Split(new[] { ' ', '=' }, StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length >= 3)
                {
                    var fieldNumber = parts[parts.Length - 1].TrimEnd(';');
                    var field = new ProtoField
                    {
                        Type = parts[0],
                        Name = parts[1],
                        Number = int.Parse(fieldNumber)
                    };
                    _log.LogMessage(MessageImportance.High, $"Added field: {field.Type} {field.Name} = {field.Number}");
                    message.Fields.Add(field);
                }
            }
            catch (Exception ex)
            {
                _log.LogError($"Failed to parse field: {line}. Error: {ex.Message}");
                throw;
            }
        }

        private ProtoEnum ParseEnum()
        {
            var line = _lines[_currentLine].Trim();
            var protoEnum = new ProtoEnum
            {
                Name = line.Split(new[] { ' ', '{' }, StringSplitOptions.RemoveEmptyEntries)[1].Trim()
            };
            _log.LogMessage(MessageImportance.High, $"Parsing enum: {protoEnum.Name}");

            _currentLine++; // Move past enum declaration

            while (_currentLine < _lines.Length)
            {
                line = _lines[_currentLine].Trim();
                // _log.LogMessage(MessageImportance.High, $"Enum line: {line}");

                if (line == "}")
                {
                    _currentLine++;
                    break;
                }

                if (!string.IsNullOrWhiteSpace(line) && !line.StartsWith("//"))
                {
                    var parts = line.Split(new[] { '=', ';' }, StringSplitOptions.RemoveEmptyEntries);
                    if (parts.Length == 2)
                    {
                        var value = new ProtoEnumValue
                        {
                            Name = parts[0].Trim(),
                            Number = int.Parse(parts[1].Trim())
                        };
                        _log.LogMessage(MessageImportance.High, $"Added enum value: {value.Name} = {value.Number}");
                        protoEnum.Values.Add(value);
                    }
                }

                _currentLine++;
            }

            return protoEnum;
        }

        private ProtoService ParseService()
        {
            var line = _lines[_currentLine].Trim();
            _log.LogMessage(MessageImportance.High, $"Starting to parse service line: {line}");
            
            var serviceParts = line.Split(new[] { ' ', '{' }, StringSplitOptions.RemoveEmptyEntries);
            if (serviceParts.Length < 2)
            {
                _log.LogError($"Invalid service declaration: {line}");
                throw new Exception($"Invalid service declaration: {line}");
            }

            var service = new ProtoService
            {
                Name = serviceParts[1].Trim()
            };
            _log.LogMessage(MessageImportance.High, $"Service name: {service.Name}");

            _currentLine++; // Move past service declaration

            while (_currentLine < _lines.Length)
            {
                line = _lines[_currentLine].Trim();
                _log.LogMessage(MessageImportance.High, $"Processing service line: {line}");

                if (line == "}")
                {
                    _currentLine++;
                    break;
                }

                if (line.StartsWith("rpc "))
                {
                    try
                    {
                        // Parse the entire RPC line
                        var rpcLine = line.Trim();
                        _log.LogMessage(MessageImportance.High, $"Processing RPC line: {rpcLine}");

                        // Extract method name
                        var methodParts = rpcLine.Split(new[] { ' ', '(' }, StringSplitOptions.RemoveEmptyEntries);
                        if (methodParts.Length < 3)
                        {
                            throw new Exception($"Invalid RPC method declaration: {rpcLine}");
                        }
                        var methodName = methodParts[1];

                        // Extract input type
                        var inputStart = rpcLine.IndexOf('(') + 1;
                        var inputEnd = rpcLine.IndexOf(')', inputStart);
                        if (inputStart <= 0 || inputEnd <= inputStart)
                        {
                            throw new Exception($"Invalid input parameter format in: {rpcLine}");
                        }
                        var inputType = rpcLine.Substring(inputStart, inputEnd - inputStart).Trim();

                        // Find returns keyword
                        var returnsIndex = rpcLine.IndexOf("returns", inputEnd, StringComparison.OrdinalIgnoreCase);
                        if (returnsIndex == -1)
                        {
                            throw new Exception($"Missing 'returns' keyword in: {rpcLine}");
                        }

                        // Extract output type
                        var outputStart = rpcLine.IndexOf('(', returnsIndex) + 1;
                        var outputEnd = rpcLine.IndexOf(')', outputStart);
                        if (outputStart <= returnsIndex || outputEnd <= outputStart)
                        {
                            throw new Exception($"Invalid output parameter format in: {rpcLine}");
                        }
                        var outputType = rpcLine.Substring(outputStart, outputEnd - outputStart).Trim();

                        var method = new ProtoMethod
                        {
                            Name = methodName,
                            InputType = inputType,
                            OutputType = outputType
                        };

                        _log.LogMessage(MessageImportance.High, 
                            $"Successfully parsed method: {method.Name}({method.InputType}) returns {method.OutputType}");
                        service.Methods.Add(method);
                    }
                    catch (Exception ex)
                    {
                        _log.LogError($"Failed to parse RPC method: {line}");
                        _log.LogError($"Error details: {ex.Message}");
                        throw;
                    }
                }

                _currentLine++;
            }

            // Allow empty services without throwing an error
            if (service.Methods.Count == 0)
            {
                _log.LogWarning($"Service {service.Name} has no methods defined, but this is allowed.");
            }
            else
            {
                _log.LogMessage(MessageImportance.High, 
                    $"Successfully parsed service {service.Name} with {service.Methods.Count} methods");
            }
            
            return service;
        }
    }

    internal class ProtoDefinition
    {
        public List<ProtoMessage> Messages { get; } = new List<ProtoMessage>();
        public List<ProtoEnum> Enums { get; } = new List<ProtoEnum>();
        public List<ProtoService> Services { get; } = new List<ProtoService>();
    }

    internal class ProtoMessage
    {
        public string Name { get; set; }
        public List<ProtoField> Fields { get; } = new List<ProtoField>();
        public List<ProtoMessage> NestedMessages { get; } = new List<ProtoMessage>();
        public List<ProtoOption> Options { get; } = new List<ProtoOption>();
    }

    internal class ProtoField
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public int Number { get; set; }
    }

    internal class ProtoEnum
    {
        public string Name { get; set; }
        public List<ProtoEnumValue> Values { get; } = new List<ProtoEnumValue>();
    }

    internal class ProtoEnumValue
    {
        public string Name { get; set; }
        public int Number { get; set; }
    }

    internal class ProtoService
    {
        public string Name { get; set; }
        public List<ProtoMethod> Methods { get; } = new List<ProtoMethod>();
    }

    internal class ProtoMethod
    {
        public string Name { get; set; }
        public string InputType { get; set; }
        public string OutputType { get; set; }
    }

    internal class ProtoOption
    {
        public string Name { get; set; }
        public string Value { get; set; }
    }
} 