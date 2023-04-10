using System.IO;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace AElf.Tools;

public class ProtoAutomaticRecognition : Task
{
    
    [Required]
    public string ProtobufPath { get; set; }
    
  
    
    
    public override bool Execute()
    {
        var files = Directory.GetFiles(ProtobufPath, "*.proto", SearchOption.AllDirectories);
        foreach (var file in files)
        {
            var content = File.ReadAllText(file);
            if (content.Contains("AElf.Standards.ACS7"))
            {
                File.WriteAllText(file, content.Replace("AElf.Standards.ACS7", "AElf.Contracts.MultiToken.Messages"));
            }
        }
        return true;
    }
}