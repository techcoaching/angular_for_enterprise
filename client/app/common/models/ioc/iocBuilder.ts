declare var require: (moduleId: string) => any;
import {IoCRegistrationItem} from "./iocRegistrationItem";
export class IoCBuilder {
    public static createTrainsent(registration: IoCRegistrationItem): any {
        if (!!registration.instanceFn) {
            return registration.instanceFn();
        }
        let instance = require(registration.instanceOf);
        registration.instanceFn = () => { return instance; };
        return instance;
    }
    public static createSingleton(registration: IoCRegistrationItem): any {
        if (!!registration.instance) {
            return registration.instance;
        }
        // let instance = require(registration.instanceOf);
        let instance = new registration.instanceOf();
        registration.instance = instance;
        return instance;
    }
}