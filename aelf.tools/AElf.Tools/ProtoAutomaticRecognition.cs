// using System.IO;
// using Microsoft.Build.Framework;
// using Microsoft.Build.Utilities;
// using Microsoft.Build.Construction;
// using System.Collections;
// using System.Collections.Generic;
//
// namespace AElf.Tools;
//
// public class ProtoAutomaticRecognition : Task
// {
//     
//     [Required]
//     public string ProjectPath { get; set; }
//     
//     
//     public override bool Execute()
//     {
//         // var files = Directory.GetFiles(ProtobufPath, "*.proto", SearchOption.AllDirectories);
//         // foreach (var file in files)
//         // {
//         //     var content = File.ReadAllText(file);
//         //     if (content.Contains("AElf.Standards.ACS7"))
//         //     {
//         //         File.WriteAllText(file, content.Replace("AElf.Standards.ACS7", "AElf.Contracts.MultiToken.Messages"));
//         //     }
//         // }
//         // return true;
//
//         // get MSBuild of project
//         ProjectRootElement project = ProjectRootElement.Open("AElf.Tools.csproj");
//         // add a ItemGroup, include .proto file
//         if (project != null)
//         {
//             ProjectItemGroupElement itemGroup = project.AddItemGroup();
//             RecognizeContract(itemGroup);
//             RecognizeMessage(itemGroup);
//             RecognizeReference(itemGroup);
//             RecognizeStub(itemGroup);
//         }
//         return true;
//     }
//
//     private void RecognizeContract(ProjectItemGroupElement itemGroup)
//     {
//         // get all .proto files to ItemGroup
//         string[] files = Directory.GetFiles(ProjectPath + "/Protobuf/contract/", "*.proto");
//         foreach (string file in files)
//         {
//             itemGroup.AddItem("Protobuf", file);
//         }
//     }
//
//     private void RecognizeMessage(ProjectItemGroupElement itemGroup)
//     {
//         // get all .proto files to ItemGroup
//         string[] files = Directory.GetFiles(ProjectPath + "/Protobuf/message/", "*.proto");
//         foreach (string file in files)
//         {
//             // add ContractOutputOptions with item
//             itemGroup.AddItem("Protobuf", file, new[] { new KeyValuePair<string, string>("ContractOutputOptions", "nocontract")});
//         }
//     }
//
//     private void RecognizeReference(ProjectItemGroupElement itemGroup)
//     {
//         // get all .proto files to ItemGroup
//         string[] files = Directory.GetFiles(ProjectPath + "/Protobuf/reference/", "*.proto");
//         foreach (string file in files)
//         {
//             // add ContractOutputOptions with item
//             itemGroup.AddItem("Protobuf", file, new[] { new KeyValuePair<string, string>("ContractOutputOptions", "reference"), new KeyValuePair<string, string>("Access", "internal")});
//         }
//     }
//
//     private void RecognizeStub(ProjectItemGroupElement itemGroup)
//     {
//         // get all .proto files to ItemGroup
//         string[] files = Directory.GetFiles(ProjectPath + "/Protobuf/stub/", "*.proto");
//         foreach (string file in files)
//         {
//             // add ContractOutputOptions with item
//             itemGroup.AddItem("Protobuf", file, new[] { new KeyValuePair<string, string>("ContractOutputOptions", "stub"), new KeyValuePair<string, string>("Access", "internal")});
//         }
//     }
//
// }