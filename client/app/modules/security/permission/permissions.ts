import { Component } from 'angular2/core';
import { BasePage, PageAction } from '../../../common/models/ui';
import { PageActions, Grid } from '../../../common/directive';

import { PermissionsModel } from './PermissionsModel';
import permissionService from '../_share/services/permissionService';

@Component({
  templateUrl: 'app/modules/security/permission/permissions.html',
  directives: [ PageActions, Grid ]
})
export class Permissions extends BasePage{

  public model: PermissionsModel = new PermissionsModel();

  constructor(){
    super();

    let self = this;

    self.model.addAction(new PageAction('btnAddPermission','security.permissions.addPermissionAction', self.addPermissionAction));

    self.loadPermissions();
  }

  private addPermissionAction(){
    console.log('addPermissionAction Clicked');
  }
  
  public onItemEditClicked(){
    console.log('onItemEditClicked');
  }
  public onItemDeleteClicked(item:any){
    let self = this;
    console.log('onItemDeleteClicked');
    if(confirm('Are you sure?')){
      permissionService.deletePermission(item.item.id).then(()=> {
        self.loadPermissions();
      });
    }
  }

  private loadPermissions(){
    let self = this;
    permissionService.loadPermissions().then((items:Array<any>) => {
      self.model.import(items);
    });
  }
}