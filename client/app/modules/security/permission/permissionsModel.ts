import { EventManager } from '../../../common/eventManager';

export class PermissionsModel{
  public actions:Array<any> = [];
  public eventKey:string = 'permissions.onLoaded';
  public options:any = {
    data:[],
    columns:[
      { field:'name', title:'Name', index: 0},
      { field:'key', title:'Key', index: 1},
      { field:'description', title:'Description', index: 2},
    ],
    enableEdit: true,
    enableDelete: true
  };

  public addAction(item:any){
    this.actions.push(item);
  }
  public import(items:Array<any>){
    let eventHandler: EventManager = window.ioc.resolve('IEventManager');
    eventHandler.publish(this.eventKey, items);
  }
}
