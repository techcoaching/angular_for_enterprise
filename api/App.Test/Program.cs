using App.Common.Ftp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string folderToUpload = @"D:\temp\powershell\files\";
            string ftp = "ftp://waws-prod-sn1-021.ftp.azurewebsites.windows.net";
            string username = @"tinyerp\tinyerp";
            string pwd = "1qazxsw2";
            string basePath = @"/site/wwwroot/";
            FTPFolderUploadRequest ftpUploadRequest = new FTPFolderUploadRequest(folderToUpload, ftp, username, pwd, basePath, folderToUpload);
            FTPHelper.UploadFolder(ftpUploadRequest);
            Console.Read();
        }
    }
}
