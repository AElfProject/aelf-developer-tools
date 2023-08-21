using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Xml.Linq;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace AElf.Tools
{
    public class ResolveProtoPath: Task
    {
        [Required]
        public ITaskItem[] ProtoAllRef { get; set; }
        [Required]
        public ITaskItem[] ProtoBase { get; set; }
        [Required]
        public ITaskItem[] ProtoContract { get; set; }
        [Required]
        public ITaskItem[] ProtoMessage { get; set; }
        [Required]
        public ITaskItem[] ProtoReference { get; set; }
        [Required]
        public ITaskItem[] ReferencePath { get; set; }
        [Required]
        public string NugetRoot { get; set; }
        [Required]
        public string ObjPathGen { get; set; }
        [Output]
        public string[] TargetBaseProto { get; set; }
        [Output]
        public string[] TargetRefProto { get; set; }
        [Output]
        public string[] RecognizeBasePath { get; set; }
        [Output]
        public string[] RecognizeMsgPath { get; set; }
        
        public override bool Execute()
        {
            // var packageIds = PackageReferences.Select(x => x.ToString()).ToImmutableHashSet();
            // var packagesList = ReferencePath.Where(x=>packageIds.Contains(x.GetMetadata("NuGetPackageId")));
            List<string> baseList = new List<string>();
            List<string> refList = new List<string>();
            List<string> regBaseList = new List<string>();
            List<string> regMsgList = new List<string>();
            foreach (var packageReference in ProtoAllRef)
            {
                var targetDir = string.IsNullOrEmpty(packageReference.GetMetadata("Test")) ? "base" : packageReference.GetMetadata("Test");
                var identity = packageReference.GetMetadata("Identity");
                var version = packageReference.GetMetadata("Version");

                var name = identity.Split('.')[1].ToLower();

                // var path = identity + "/" + version + "/" + targetDir + "/" + "Protobuf/";
                var path = NugetRoot + identity.ToLower() + "/" + version + "/" + "Protobuf/" + name + ".proto";
                Console.WriteLine($"path: {path}");

                var regPath = ObjPathGen + name + ".proto";
                Console.WriteLine($"regpath: {regPath}");
                

                if (targetDir.Equals("base"))
                {
                    baseList.Add(path);
                    regBaseList.Add(regPath);
                }
                else if (targetDir.Equals("reference"))
                {
                    refList.Add(path);
                }

            }

            foreach (var p in ProtoBase)
            {
                var path = p.ToString();
                var idx = path.LastIndexOf("/") + 1;
                var name = path.Substring(idx);
                var regPath = ObjPathGen + name;
                regBaseList.Add(regPath);
                Console.WriteLine($"regbasePath2: {regPath}");
            }
            
            foreach (var p in ProtoMessage)
            {
                var path = p.ToString();
                var idx = path.LastIndexOf("/") + 1;
                var name = path.Substring(idx);
                var regPath = ObjPathGen + name;
                regMsgList.Add(regPath);
                Console.WriteLine($"regmsgPath2: {regPath}");
            }
            
            TargetBaseProto = baseList.ToArray();
            TargetRefProto = refList.ToArray();
            RecognizeBasePath = regBaseList.ToArray();
            RecognizeMsgPath = regMsgList.ToArray();
            
            foreach (var p in TargetBaseProto)
            {
                Console.WriteLine($"finalBaseItem: {p}");
            }
            foreach (var p in TargetRefProto)
            {
                Console.WriteLine($"finalRefItem: {p}");
            }
            foreach (var p in RecognizeBasePath)
            {
                Console.WriteLine($"regfinalBaseRefItem: {p}");
            }
            foreach (var p in RecognizeMsgPath)
            {
                Console.WriteLine($"regfinalMsgRefItem: {p}");
            }
            
            return true;
        }
    }    
}