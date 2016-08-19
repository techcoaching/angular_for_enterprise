import {KeyNamePair} from "../../models/keyNamePair";
import {FormSelectMode} from "../../enum";

export class SelectPermissionModel {
    public mode: FormSelectMode = FormSelectMode.Item;
    public values: Array<KeyNamePair>;
    public permissions: Array<any>;
    constructor() {
        this.values = [];
        this.permissions = [];
    }
    public setPermissions(pers: any) {
        this.permissions = [].concat(pers);
    }
    public setValues(values: Array<string>) {
        this.values = [].concat(values);
    }
}