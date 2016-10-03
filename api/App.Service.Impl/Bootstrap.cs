using App.Common.DI;
namespace App.Service.Impl
{
    public class Bootstrap : App.Common.Tasks.BaseTask<IBaseContainer>, IBootstrapper
    {
        public Bootstrap():base(App.Common.ApplicationType.All)
        {

        }
        public void Execute(IBaseContainer context)
        {
            context.RegisterSingleton<App.Service.Registration.User.IUserService, App.Service.Impl.Registration.UserService>();
            context.RegisterSingleton<App.Service.Common.ILanguageService, App.Service.Impl.Common.LanguageService>();
            context.RegisterSingleton<App.Service.Security.IPermissionService, App.Service.Impl.Security.PermissionService>();
        }
    }
}
