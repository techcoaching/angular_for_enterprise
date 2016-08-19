using System;
namespace App.Common
{
    [Flags]
    public enum IOMode { 
        Read,
        Write
    }
    public enum DatabaseType { 
        MSSQL,
        MongoDB,
        ElasticSearch
    }
    [Flags]
    public enum ApplicationType{
        Console=1,
        MVC=2,
        WebApi=4,
        All=7
    }
    [Flags]
    public enum UserRole
    {
        None=0,
        BugLeader=2,
        Developer=4,
        AddressedServicesOnly=8,
        MasterGeography=16,
        MasterEconomy=32,
        MasterDistribution=64,
        MasterProject=128,
        MasterSales=256,
        MasterAdministration=512,
        Master=1023
    }

        public enum AuthenticationType
    {
        Normal,
        User
    }

    public enum AssemblyType
    {
        Common,
        Context,
        Repository,
        Service
    }

    [Flags]
    public enum SkillLevel { 
        Junior,
        Senior,
        Leader,
        Manager
    }

    public enum QuestionType { 
        Sinlge,
        Multiple
    }

    public enum ExamStatus { 
        Draft,
        Approved,
        Pending,
        Expired,
        Closed
    }
    public enum FTPResourceType { 
        Directory,
        File
    }
    public enum ResourceType {
        Resource,
        MailTemplate,
        Text
    }
}
