import {Component, Input, Output, EventEmitter} from "angular2/core";
import {BaseControl} from "../../../common/models/ui";
import {SelectPermissionModel} from "./selectPermissionModel";
import {FormSelectMode} from "../../../common/enum";
import {KeyNamePair} from "../../../common/models/KeyNamePair";
import permissionService from "../../../common/services/permissionService";
@Component({
    selector: "select-permissions",
    templateUrl: "app/common/directives/form/selectPermission.html"
})
export class SelectPermission extends BaseControl {
    public model: SelectPermissionModel = new SelectPermissionModel();
    public SelectMode: any = FormSelectMode;
    public cssClass: string = String.empty;
    public mode: FormSelectMode = FormSelectMode.Item;
    private dom: any;

    @Input() placeHolder: string;
    @Input("values") values: Array<string>;
    @Output() onItemSelected = new EventEmitter();
    @Output() onItemUnSelected = new EventEmitter();

    constructor() {
        super();
        let self: SelectPermission = this;
        this.mode = FormSelectMode.Item;

    }
    protected onChange() {
        if (this.dom) {
            this.dom.val(this.model.values).trigger("change");
        }
    }
    protected onReady() {
        let self: SelectPermission = this;
        self.model.setValues(self.values);
        permissionService.getPermissions().then(function (pers: Array<any>) {
            self.model.setPermissions(pers);

        });

        this.dom = window.jQuery(String.format("#{0}", self.id)).select2({
            maximumSelectionLength: 4,
            placeholder: self.placeHolder,
            allowClear: true
        });
        this.dom.on("select2:select", function (item: any) { self.onItemSelected.emit({ id: item.params.data.id, name: item.params.data.text }); });
        this.dom.on("select2:unselect", function (item: any) { self.onItemUnSelected.emit({ id: item.params.data.id, name: item.params.data.text }); });
    }
}