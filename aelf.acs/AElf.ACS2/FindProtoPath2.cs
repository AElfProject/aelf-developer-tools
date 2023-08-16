using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Xml.Linq;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace AElf.ACS2
{
    public class FindProtoPath2: Task
    {
        [Required]
        public ITaskItem[] ProtoRef2 { get; set; }
        [Required]
        public ITaskItem[] ReferencePath { get; set; }
        [Output]
        public string ProtoTar2 { get; private set; }

        public override bool Execute()
        {
            // var packageIds = PackageReferences.Select(x => x.ToString()).ToImmutableHashSet();
            // var packagesList = ReferencePath.Where(x=>packageIds.Contains(x.GetMetadata("NuGetPackageId")));
            List<string> baseList = new List<string>();
            foreach (var packageReference in ProtoRef2)
            {
                // foreach (var name in packageReference.MetadataNames)
                // {
                //     Console.WriteLine($"name: {name}");
                // }
                
                var targetDir = string.IsNullOrEmpty(packageReference.GetMetadata("TargetDir")) ? "base" : packageReference.GetMetadata("TargetDir");
                var identity = packageReference.GetMetadata("Identity");
                var version = packageReference.GetMetadata("Version");

                var path = identity + "/" + version + "/" + targetDir + "/" + "Protobuf/";
                Console.WriteLine($"path: {path}");
                baseList.Add(targetDir);

                if (targetDir != "")
                {
                    ProtoTar2 = targetDir;
                }
                // var packageElement = XElement.Parse(packageReference.GetMetadata("Xml"));
                // var testElement = packageElement.Descendants("Test").FirstOrDefault();
                //
                // if (testElement != null)
                // {
                //     TestValue = testElement.Value;
                //     return true;
                // }
            }
            Console.WriteLine($"protar2: {ProtoTar2}");

            // ProtoTar = baseList.ToArray();
            
            // foreach (var p in ProtoBasePath)
            // {
            //     Console.WriteLine($"p: {p}");
            // }
            
            return true;
        }
    }    
}