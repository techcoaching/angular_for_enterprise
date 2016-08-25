using App.Common.Data;

namespace App.Service.Security
{
    public class CreatePermissionRequest
    {
        public string Name { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }
    }
}
