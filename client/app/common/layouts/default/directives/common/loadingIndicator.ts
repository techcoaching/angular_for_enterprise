import {Component, Input} from "angular2/core";
import {LoadingIndicatorEvent} from "../../../../event";
import {EventManager} from "../../../../eventManager";

@Component({
    selector: "loading-indicator",
    template: "<div id='loaderIndicator' class='loading {{model}}'>&nbsp;</div>"
})
export class LoadingIndicator {
    public model: string = LoadingIndicatorEvent.Show;
    constructor() {
        let self: LoadingIndicator = this;
        let eventManager: EventManager = window.ioc.resolve("IEventManager");
        eventManager.subscribe(LoadingIndicatorEvent.Show, () => self.onShow());
        eventManager.subscribe(LoadingIndicatorEvent.Hide, () => self.onHide());
    }
    public onShow(): void {
        this.model = LoadingIndicatorEvent.Show;
    }
    public onHide(): void {
        this.model = LoadingIndicatorEvent.Hide;
    }
}