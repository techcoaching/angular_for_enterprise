using App.Common.Data;
using App.Common.Data.MSSQL;
using App.Context;
using App.Entity.Security;
using App.Repository.Security;

namespace App.Repository.Impl.Security
{
    public class PermissionRepository: BaseContentRepository<Permission>, IPermissionRepository
    {
        public PermissionRepository(): base(new AppDbContext())
        {

        }

        public PermissionRepository(IUnitOfWork uow): base(uow.Context as IMSSQLDbContext)
        {

        }
    }
}
