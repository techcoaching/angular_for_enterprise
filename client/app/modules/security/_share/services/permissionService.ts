import { IConnector } from '../../../../common/connectors/iconnector';
import appConfig from '../../../../common/helpers/configHelper';

let permissionService = {
  loadPermissions: loadPermissions,
  deletePermission: deletePermission
};
export default permissionService;

function loadPermissions(){
  let url = String.format('{0}permissions', appConfig.getAppConfig().api.baseUrl);
  let connector: IConnector = window.ioc.resolve('IConnector');
  return connector.get(url);
}

function deletePermission(itemId:any){
  let url = String.format('{0}permissions/{1}',
    appConfig.getAppConfig().api.baseUrl,
    itemId
    );
  let connector: IConnector = window.ioc.resolve('IConnector');
  return connector.delete(url);
}