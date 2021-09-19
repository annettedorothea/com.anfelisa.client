/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractRootCategoryNameChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.RootCategoryNameChangedCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.RootCategoryNameChangedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



