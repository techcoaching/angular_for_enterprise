import {IModule, Module, MenuItem} from "../../../../common/models/layout";
import {Works} from "../../work/works";
import {Tasks} from "../../task/Tasks";
import {LogWorks} from "../../logwork/LogWorks";
let umModule: IModule = createModule();
export default umModule;
function createModule() {
    let module = new Module("app/modules/timesheet", "timesheet");
    module.menus.push(
        new MenuItem(
            "Timesheet", "/Works", "fa fa-edit",
            new MenuItem("Works", "/Works", ""),
            new MenuItem("Tasks", "/Tasks", ""),
            new MenuItem("Log Woks", "/LogWorks", "")
        )
    );
    module.addRoutes([
        { path: "/works", name: "Works", component: Works},
        { path: "/tasks", name: "Tasks", component: Tasks},
        { path: "/logworkd", name: "LogWorks", component: LogWorks}
    ]);
    return module;
}