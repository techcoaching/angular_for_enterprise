import {IModule} from "../common/models/layout";
import umModule from "../modules/usermanagement/_share/config/module";
import timesheetModule from "../modules/timesheet/_share/config/module";
import registration from "../modules/registration/_share/config/module";
import {Languages} from "../common/enum";
let modules: Array<IModule> = [
    umModule,
    timesheetModule,
    registration
];
export default {
    app: {
        name: "myERP"
    },
    ioc: "./config/ioc",
    modules: modules,
    loginUrl: "/Login",
    defaultUrl: "/Roles",
    localization: {
        lang: Languages.EN
    },
    auth: {
        token: "authtoken"
    },
    api: {
       baseUrl: "http://localhost:22383/api/"
    },
    localeUrl: "/app/resources/locales/"
};