import {JsonHeaders} from "../../../../common/models/http";
import configHelper from "../../../../common/helpers/configHelper";
let permissionService={
    getPermissions: getPermissions,
    delete: remove
};
export default permissionService;
function remove(id: any){
    var url = String.format("{0}/permissions/{1}", configHelper.getAppConfig().api.baseUrl, id);
    var conenctor = window.ioc.resolve("IConnector");
    var jsonHeader  = new JsonHeaders();
    return conenctor.delete(url, jsonHeader);
}
function getPermissions(){
    var url = String.format("{0}/permissions", configHelper.getAppConfig().api.baseUrl);
    var conenctor = window.ioc.resolve("IConnector");
    var jsonHeader  = new JsonHeaders();
    return conenctor.get(url, jsonHeader);
}