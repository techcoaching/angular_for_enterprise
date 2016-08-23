import {EventManager} from "../../../common/eventManager";
export class PermissionsModel{
    public actions: Array<any>=[];
    public eventKey: string = "permissions_ondataloaded";
    public options: any={
        data:[],
        columns:[
            {field:"name", title:"Name", index:0},
            {field:"key", title:"Key", index:1},
            {field:"description", title:"Description", index:2},
        ],
        enableEdit:true,
        enableDelete: true
    };
    public import(items: Array<any>){
        let eventManager = window.ioc.resolve("IEventManager");
        eventManager.publish(this.eventKey, items);
    }
    public addAction(action: any): void{
        this.actions.push(action);
    }
}