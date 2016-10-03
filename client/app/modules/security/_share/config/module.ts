import { IModule, Module, MenuItem } from '../../../../common/models/layout';
import { AuthenticationMode } from '../../../../common/enum';
import { Permissions } from '../../permission/permissions';

let secModule: IModule = createModule();
export default secModule;

function createModule(){
  let module = new Module('app/modules/security','security');

  module.menus.push(
    new MenuItem('Security','Permissions','fa fa-lock',
      new MenuItem('Permissions','Permissions','')    
    )
  );

  module.addRoutes([
    { path:'/permissions', name:'Permissions', component: Permissions, data: { authentication: AuthenticationMode.None }}
  ]);

  return module;
}