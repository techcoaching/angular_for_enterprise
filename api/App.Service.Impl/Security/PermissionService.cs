using System;
using System.Collections.Generic;
using App.Service.Security;
using App.Common.DI;
using App.Repository.Security;
using App.Common.Data;
using App.Context;
using App.Common;
using App.Common.Data.MSSQL;
using App.Common.Validation;
using App.Entity.Security;

namespace App.Service.Impl.Security
{
    public class PermissionService : IPermissionService
    {
        public void DeletePermission(string itemId)
        {
            ValidateForDelete(itemId);
            using (IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write))) {
                IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                perRepo.Delete(itemId);
                uow.Commit();
            }
        }

        private void ValidateForDelete(string itemId)
        {
            if (string.IsNullOrWhiteSpace(itemId)) {
                throw new ValidationException("security.deletePermission.invalidId");
            }
            Guid id;
            if (!Guid.TryParse(itemId, out id)) {
                throw new ValidationException("security.deletePermission.invalidId");
            }
        }

        public IList<PermissionListItem> GetPermissions()
        {
            IPermissionRepository perRepo = IoC.Container.Resolve<IPermissionRepository>();
            return perRepo.GetItems<PermissionListItem>();
        }

        public void Create(CreatePermissionRequest request)
        {
            ValidateCreateRequest(request);
            using (IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write))) {
                IPermissionRepository permissionRepo = IoC.Container.Resolve<IPermissionRepository>(uow);
                Permission per = new Permission(request.Name, request.Key, request.Description);
                permissionRepo.Add(per);
                uow.Commit();
            }
        }

        private void ValidateCreateRequest(CreatePermissionRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name)) {
                throw new ValidationException("security.addPermission.nameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(request.Key))
            {
                throw new ValidationException("security.addPermission.keyIsRequired");
            }
            if (request.Key.Contains(" "))
            {
                throw new ValidationException("security.addPermission.keyHasNotWhiteSpace");
            }
        }
    }
}
