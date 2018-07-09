import AbstractLoginDoNotSaveInLocalstorageEvent
    from "../../../gen/common/events/AbstractLoginDoNotSaveInLocalstorageEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginDoNotSaveInLocalstorageEvent extends AbstractLoginDoNotSaveInLocalstorageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
