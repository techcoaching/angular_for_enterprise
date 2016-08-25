import {Component} from "angular2/core";
import {AddPermissionModel} from "./addPermissionModel";
import {Router} from "angular2/router";
import permissionService from "../_share/services/permissionService";
import {BasePage} from "../../../common/models/ui";
import {ValidationDirective} from "../../../common/directive";
@Component({
    templateUrl: "app/modules/security/permission/addPermission.html",
    directives:[ValidationDirective]
})
export class AddPermission extends BasePage {
    private router: Router;
    public model: AddPermissionModel = new AddPermissionModel();
    constructor(router: Router) {
        super();
        this.router = router;
    }
    public onSaveClicked() {
        let self: AddPermission = this;
        if (!self.model.validate()) { return; }
        permissionService.create(this.model).then(function () {
            self.router.navigate(["Permissions"]);
        });
    }
    public onCancelClicked() {
        this.router.navigate(["Permissions"]);
    }
}