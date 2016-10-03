using App.Common.DI;
using App.Common.Http;
using App.Common.Validation;
using App.Service.Security;
using System.Collections.Generic;
using System.Web.Http;

namespace App.Api.Features.Security
{
    [RoutePrefix("api/permissions")]
    public class PermissionsController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IResponseData<IList<PermissionListItem>> GetPermissions()
        {
            IResponseData<IList<PermissionListItem>> response = new ResponseData<IList<PermissionListItem>>();

            try
            {
                IPermissionService permissionService = IoC.Container.Resolve<IPermissionService>();
                IList<PermissionListItem> permissions = permissionService.getPermissions();
                response.SetData(permissions);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }

            return response;
        }

        [HttpDelete]
        [Route("{itemId}")]
        public IResponseData<string> DeletePermissions([FromUri] string itemId)
        {
            IResponseData<string> response = new ResponseData<string>();

            try
            {
                IPermissionService permissionService = IoC.Container.Resolve<IPermissionService>();
                permissionService.deletePermission(itemId);
            }
            catch (ValidationException ex)
            {
                response.SetStatus(System.Net.HttpStatusCode.PreconditionFailed);
                response.SetErrors(ex.Errors);
            }

            return response;
        }
    }
}
