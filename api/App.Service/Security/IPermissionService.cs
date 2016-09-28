using System.Collections.Generic;

namespace App.Service.Security
{
    public interface IPermissionService
    {
        IList<PermissionListItem> getPermissions();
        void deletePermission(string itemId);
    }
}
