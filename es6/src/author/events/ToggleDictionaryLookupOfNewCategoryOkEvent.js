import AbstractToggleDictionaryLookupOfNewCategoryOkEvent from "../../../gen/author/events/AbstractToggleDictionaryLookupOfNewCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleDictionaryLookupOfNewCategoryOkEvent extends AbstractToggleDictionaryLookupOfNewCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */