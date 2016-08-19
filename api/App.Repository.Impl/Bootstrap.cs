using App.Common.DI;
using App.Repository.Impl.Registration;
using App.Repository.Registration;

namespace App.Repository.Impl
{
    public class Bootstrap : App.Common.Tasks.BaseTask<IBaseContainer>, IBootstrapper
    {
        public Bootstrap():base(App.Common.ApplicationType.All)
        {

        }
        public void Execute(IBaseContainer context)
        {
            context.RegisterTransient<IUserRepository, UserRepository>();
            context.RegisterTransient<Repository.Common.ILanguageRepository, App.Repository.Impl.Common.LanguageRepository>();
        }
    }
}

