using System;
using System.Collections.Generic;
using System.IO;
using App.Common.UITest.Environment;
using Ionic.Zip;

namespace App.Common.Helpers
{
    public class FileHelper
    {
        internal static string GetRelativeFilePath(string filePath, string basePath)
        {
            return filePath.Replace(basePath, "");
        }

        public static void CreateIfNotExist(string folder)
        {
            if (Directory.Exists(folder))
            {
                return;
            }
            Directory.CreateDirectory(folder);
        }

        internal static void CreateZipFile(IList<IEnvironment> environtments, string zipFileName)
        {
            ZipFile zipFile = new ZipFile();
            foreach (IEnvironment environment in environtments)
            {
                zipFile.AddDirectory(environment.OutputFolder);
            }
            zipFile.Save(zipFileName);
        }

        public static string GetContent(string filePath)
        {
            return File.ReadAllText(filePath);
        }
    }
}
