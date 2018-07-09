import AbstractLoadWantedImageOfNewCardOkEvent
    from "../../../gen/author/events/AbstractLoadWantedImageOfNewCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadWantedImageOfNewCardOkEvent extends AbstractLoadWantedImageOfNewCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
