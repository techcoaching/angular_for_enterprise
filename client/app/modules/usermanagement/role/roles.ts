import {Component }  from "angular2/core";
import {CanActivate} from "angular2/router";
import {BasePage} from "../../../common/models/ui";
@Component({
    selector: "roles",
    templateUrl: "app/modules/usermanagement/role/roles.html",
})
export class Roles extends BasePage {
    constructor() {
        super();
    }
    public name: string = "Roles page";
}