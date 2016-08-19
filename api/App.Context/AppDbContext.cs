using App.Entity.Registration;
using System.Data.Entity;
using App.Common.Data;
using System;
using App.Common;
using App.Entity.Security;

namespace App.Context
{
    public class AppDbContext : App.Common.Data.MSSQL.MSSQLDbContext
    {
        public AppDbContext(IOMode mode = IOMode.Read) : base(new App.Common.Data.MSSQL.MSSQLConnectionString(), mode)
        {
            Database.SetInitializer<AppDbContext>(new DropCreateDatabaseIfModelChanges<AppDbContext>());
        }
        public System.Data.Entity.DbSet<User> Users { get; set; }
        public System.Data.Entity.DbSet<Permission> Permissions { get; set; }
        public System.Data.Entity.DbSet<Role> Roles { get; set; }
        public System.Data.Entity.DbSet<UserGroup> UserGroups { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<Permission>().ToTable("Permissions");
            modelBuilder.Entity<Role>()
                .HasMany(role => role.Permissions)
                .WithMany(per => per.Roles)
                .Map(m =>
                {
                    m.MapLeftKey("RoleId");
                    m.MapRightKey("PermissionId");
                    m.ToTable("PermissionInRoles");
                });
        }
    }
}
