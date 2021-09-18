/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";

export default class AbstractCheckDropAllowedCommand extends SynchronousCommand {
    constructor() {
        super("category.CheckDropAllowedCommand");
    }

    initCommandData(data) {
        data.rootCategory = AppUtils.get(["rootContainer", ["mainView", "authorView"], "categoryTree", "rootCategory"]);
        data.movedCategory = AppUtils.get(["rootContainer", ["mainView", "authorView"], "categoryTree", "movedCategory"]);
        data.movedCardIds = AppUtils.get(["rootContainer", ["mainView", "authorView"], "cardView", "movedCardIds"]);
        data.selectedCategory = AppUtils.get(["rootContainer", ["mainView", "authorView"], "categoryTree", "selectedCategory"]);
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.CheckDropAllowedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
		}
    }
}




/******* S.D.G. *******/



