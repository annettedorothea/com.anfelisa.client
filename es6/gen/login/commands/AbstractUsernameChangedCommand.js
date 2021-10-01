/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUsernameChangedCommand extends SynchronousCommand {
    constructor() {
        super("login.UsernameChangedCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('login.UsernameChangedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



