/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractDisplayWantedCommand extends SynchronousCommand {
    constructor() {
        super("box.DisplayWantedCommand");
    }

    initCommandData(data) {
        data.index = AppUtils.get(
        	["rootContainer", "mainView", "nextCard", "index"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.DisplayWantedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



