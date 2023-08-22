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
        public string[] TargetBasePath { get; set; }
        [Output]
        public string[] TargetRefProto { get; set; }
        [Output]
        public string[] TargetRefPath { get; set; }
        
        public override bool Execute()
        {
            List<string> baseList = new List<string>();
            List<string> refList = new List<string>();
            List<string> basePathList = new List<string>();
            List<string> refPathList = new List<string>();
            foreach (var packageReference in ProtoAllRef)
            {
                // todo TargetDir name
                var targetDir = string.IsNullOrEmpty(packageReference.GetMetadata("TargetDir")) ? "base" : packageReference.GetMetadata("TargetDir");
                var identity = packageReference.GetMetadata("Identity");
                var version = packageReference.GetMetadata("Version");

                var name = identity.Split('.')[1].ToLower();

                // var path = identity + "/" + version + "/" + targetDir + "/" + "Protobuf/";
                var proto = NugetRoot + identity.ToLower() + "/" + version + "/" + "Protobuf/" + name + ".proto";
                Console.WriteLine($"path: {proto}");
                var path = NugetRoot + identity.ToLower() + "/" + version + "/" + "Protobuf";
                
                // todo 
                if (targetDir.Equals("base"))
                {
                    baseList.Add(proto);
                    basePathList.Add(path);
                }
                else if (targetDir.Equals("reference"))
                {
                    refList.Add(proto);
                    refPathList.Add(path);
                }
            }

            TargetBaseProto = baseList.ToArray();
            TargetBasePath = basePathList.ToArray();
            TargetRefProto = refList.ToArray();
            TargetRefPath = refPathList.ToArray();
            
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