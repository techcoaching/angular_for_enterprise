using System.IO;

namespace App.UI.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string emvironmentPath = Path.Combine(App.Common.Configurations.Configuration.Current.UITest.BasePath, App.Common.Configurations.Configuration.Current.UITest.EnvirontmenFile);
            App.Common.UITest.UITestExecutor.Execute(emvironmentPath);
            System.Console.WriteLine("Done. Press any key to continue ....");
            //System.Console.ReadKey();
        }
    }
}
