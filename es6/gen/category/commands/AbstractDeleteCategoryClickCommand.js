/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractDeleteCategoryClickCommand extends SynchronousCommand {
    constructor() {
        super("category.DeleteCategoryClickCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.DeleteCategoryClickOkEvent').publish(data);
			AppState.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



