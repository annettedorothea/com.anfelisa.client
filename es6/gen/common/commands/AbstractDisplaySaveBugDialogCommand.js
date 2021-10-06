/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractDisplaySaveBugDialogCommand extends SynchronousCommand {
    constructor() {
        super("common.DisplaySaveBugDialogCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.DisplaySaveBugDialogOkEvent').publish(data);
			AppState.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



