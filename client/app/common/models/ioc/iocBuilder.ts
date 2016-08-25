import {IoCRegistrationItem} from "./iocRegistrationItem";
export class IoCBuilder {
    public static createTrainsent(registration: IoCRegistrationItem): any {
        if (!!registration.instanceFn) {
            return registration.instanceFn();
        }
        let instance = registration.instanceOf;
        registration.instanceFn = () => { return new instance(); };
        return registration.instanceFn();
    }
    public static createSingleton(registration: IoCRegistrationItem): any {
        if (!!registration.instance) {
            return registration.instance;
        }
        let instance = new registration.instanceOf();
        registration.instance = instance;
        return instance;
    }
}