// using System.Collections.Immutable;
// using System.Linq;
//
// using Microsoft.Build.Framework;
// using Microsoft.Build.Utilities;
//
// namespace AElf.ACS
// {
//     public class FindProtoPath:Task
//     {
//         [Required]
//         public ITaskItem[] CustomProtoDir { get; set; }
//         [Output]
//         public ITaskItem[] OutputProtoDir { get; private set; }
//
//         public override bool Execute()
//         {
//             OutputProtoDir = CustomProtoDir;
//             return true;
//         }
//     }    
// }