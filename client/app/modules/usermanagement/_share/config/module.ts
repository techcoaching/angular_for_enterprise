import {IModule, Module, MenuItem} from "../../../../common/models/layout";
import {Roles} from "../../role/roles";
import {Groups} from "../../group/groups";
import {Permissions} from "../../permission/permissions";
import {AuthenticationMode} from "../../../../common/enum";
let umModule: IModule = createModule();
export default umModule;
function createModule() {
    let module = new Module("app/modules/usermanagement", "userManagement");
    module.menus.push(
        new MenuItem(
            "User Management", "/Roles", "fa fa-users",
            new MenuItem("Roles", "/Roles", ""),
            new MenuItem("User Groups", "/Groups", ""),
            new MenuItem("User Permission", "/Permissions", "")
        )
    );
    module.addRoutes([
        { path: "/roles", name: "Roles", component: Roles, data: { authentication: AuthenticationMode.Require }, useAsDefault: true },
        { path: "/groups", name: "Groups", component: Groups, data: { authentication: AuthenticationMode.Require } },
        { path: "/permissions", name: "Permissions", component: Permissions, data: { authentication: AuthenticationMode.Require } },
    ]);
    return module;
}