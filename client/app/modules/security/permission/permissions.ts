import {Component} from "angular2/core";
import {PageActions, Grid} from "../../../common/directive";
import {PageAction} from "../../../common/models/ui";
import {PermissionsModel} from "./permissionsModel";
import {BasePage} from "../../../common//models/ui";
import {Router} from "angular2/router";
import permissionService from "../_share/services/permissionService";
@Component({
    templateUrl: "app/modules/security/permission/permissions.html",
    directives: [PageActions, Grid]
})
export class Permissions extends BasePage {
    public model: PermissionsModel = new PermissionsModel();
    private router: Router;
    constructor(router: Router) {
        super();
        let self: Permissions = this;
        self.router = router;
        this.model.addAction(new PageAction("btnAddPermission", "security.permissions.addPermission", () => self.onAddPermissionClicked()));
        this.loadPermissions();
    }
    public onPermissionEditClicked(perItem: any) {
        console.log(perItem);
    }
    public onPermissionDeleteClicked(perItem: any) {
        let self: Permissions = this;
        permissionService.delete(perItem.item.id).then(function () {
            self.loadPermissions();
        });
    }
    private loadPermissions() {
        let self: Permissions = this;
        permissionService.getPermissions().then(function (perItems: Array<any>) {
            self.model.import(perItems);
        });
    }
    private onAddPermissionClicked() {
        this.router.navigate(["Add Permission"]);
    }
}