#region Copyright notice and license

#endregion

using System.Runtime.InteropServices;

namespace AElf.Tools.Test
{
    static class MsBuildAssemblyHelper
    {
        [DllImport("__Internal")]
	    extern static void mono_set_assemblies_path(string path);

        public static void TweakAssemblyPathIfOnMono()
        {
            // Below is a hack to allow the tests to run under Mono Framework build.
            // Mono unfortunately comes with broken Microsoft.Build.* assemblies installed in
            // the GAC, so we need to tweak the assembly search path to make sure the right
            // msbuild assemblies are loaded (and the tests work).
#if NET45
            // only run this under .NET framework; under mono
            bool isMono = Type.GetType("Mono.Runtime") != null;
            if (isMono)
            {
               var mscorlibDir = Path.GetDirectoryName(typeof(Array).Assembly.Location);
               // Construct the location of MsBuild assemblies from the location of mscorlib assembly.
               var msbuildToolPath = Path.Combine(mscorlibDir, "..", "msbuild", "Current", "bin");

               if (!Directory.Exists(msbuildToolPath))
               {
                   // with older versions of mono for Mac (e.g. mono 5.16.0 which is currently
                   // installed on the kokoro mac workers) the "Current" symlink doesn't exist
                   // so also try specifying the msbuild version explicitly
                   msbuildToolPath = Path.Combine(mscorlibDir, "..", "msbuild", "15.0", "bin");
               }

               // To make sure we've constructed the right path, make sure the assemblies we're interested
               // in are there.
               foreach(var assemblyName in new [] {"Microsoft.Build.Framework.dll", "Microsoft.Build.Utilities.v4.0.dll", "Microsoft.Build.Utilities.Core.dll"})
               {
                   if (!File.Exists(Path.Combine(msbuildToolPath, assemblyName)))
                   {
                       throw new InvalidOperationException($"Could not locate assembly {assemblyName} under {msbuildToolPath}");
                   }
               }
               // Normally the assembly search path can be changed by MONO_PATH environment variable, but it needs to be done
               // before the process starts. The following internal method allows us to do the same thing.
               mono_set_assemblies_path(msbuildToolPath);
            }
#endif
        }
    }
}