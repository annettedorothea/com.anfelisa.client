import AbstractCreateCardUnauthorizedEvent from "../../../gen/author/events/AbstractCreateCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateCardUnauthorizedEvent extends AbstractCreateCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */