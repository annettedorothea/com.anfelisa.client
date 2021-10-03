/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractPasswordChangedCommand extends SynchronousCommand {
    constructor() {
        super("password.PasswordChangedCommand");
    }

    initCommandData(data) {
        data.passwordRepetition = AppUtils.get(
        	["rootContainer", "mainView", "passwordRepetition"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('password.PasswordChangedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



