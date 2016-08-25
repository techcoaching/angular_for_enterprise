namespace App.Service.Security
{
    public interface IPermissionService
    {
        System.Collections.Generic.IList<PermissionListItem> GetPermissions();
        void DeletePermission(string itemId);
        void Create(CreatePermissionRequest request);
    }
}
