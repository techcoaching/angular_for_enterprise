using System;
using System.Collections.Generic;
using App.Service.Security;
using App.Common.DI;
using App.Repository.Security;
using App.Common.Validation;
using App.Common.Data;
using App.Context;

namespace App.Service.Impl.Security
{
    public class PermissionService : IPermissionService
    {
        public void deletePermission(string itemId)
        {
            ValidateForDelete(itemId);
            using (IUnitOfWork uow = new UnitOfWork(new AppDbContext(App.Common.IOMode.Write)))
            {
                IPermissionRepository permissionRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                permissionRepo.Delete(itemId);
                uow.Commit();
            }
        }

        private void ValidateForDelete(string itemId)
        {
            if (string.IsNullOrWhiteSpace(itemId))
                throw new ValidationException("security.permissions.invalidPermissionId");

            Guid id;
            if(!Guid.TryParse(itemId,out id))
                throw new ValidationException("security.permissions.invalidPermissionId");

        }

        public IList<PermissionListItem> getPermissions()
        {
            IPermissionRepository permissionRepo = IoC.Container.Resolve<IPermissionRepository>();
            return permissionRepo.GetItems<PermissionListItem>();
        }
    }
}
