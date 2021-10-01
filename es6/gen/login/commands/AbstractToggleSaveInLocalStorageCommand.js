/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractToggleSaveInLocalStorageCommand extends SynchronousCommand {
    constructor() {
        super("login.ToggleSaveInLocalStorageCommand");
    }

    initCommandData(data) {
        data.saveInLocalStorage = AppUtils.get(
        	["rootContainer", "mainView", "saveInLocalStorage"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('login.ToggleSaveInLocalStorageOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



