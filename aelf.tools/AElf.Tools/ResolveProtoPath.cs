using System;
using System.Collections.Generic;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace AElf.Tools
{
    public class ResolveProtoPath: Task
    {
        [Required]
        public ITaskItem[] ProtoAllRef { get; set; }
        [Required]
        public ITaskItem[] ReferencePath { get; set; }
        [Required]
        public string NugetRoot { get; set; }
        [Output]
        public string[] TargetBaseProto { get; set; }
        [Output]
        public string[] TargetRefProto { get; set; }
        
        public override bool Execute()
        {
            List<string> baseList = new List<string>();
            List<string> refList = new List<string>();
            foreach (var packageReference in ProtoAllRef)
            {
                var targetDir = string.IsNullOrEmpty(packageReference.GetMetadata("TargetDir")) ? "base" : packageReference.GetMetadata("TargetDir");
                var identity = packageReference.GetMetadata("Identity");
                var version = packageReference.GetMetadata("Version");

                var name = identity.Split('.')[1].ToLower();

                // var path = identity + "/" + version + "/" + targetDir + "/" + "Protobuf/";
                var path = NugetRoot + identity.ToLower() + "/" + version + "/" + "Protobuf/" + name + ".proto";
                Console.WriteLine($"path: {path}");

                if (targetDir.Equals("base"))
                {
                    baseList.Add(path);
                }
                else if (targetDir.Equals("reference"))
                {
                    refList.Add(path);
                }
            }

            TargetBaseProto = baseList.ToArray();
            TargetRefProto = refList.ToArray();
            
            foreach (var p in TargetBaseProto)
            {
                Console.WriteLine($"finalBaseItem: {p}");
            }
            foreach (var p in TargetRefProto)
            {
                Console.WriteLine($"finalRefItem: {p}");
            }
            return true;
        }
    }    
}