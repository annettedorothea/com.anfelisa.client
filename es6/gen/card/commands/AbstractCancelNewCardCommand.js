/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractCancelNewCardCommand extends SynchronousCommand {
    constructor() {
        super("card.CancelNewCardCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.CancelNewCardOkEvent').publish(data);
			AppState.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



