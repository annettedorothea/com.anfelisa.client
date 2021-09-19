/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractToggleInputOrderCommand extends SynchronousCommand {
    constructor() {
        super("card.ToggleInputOrderCommand");
    }

    initCommandData(data) {
        data.naturalInputOrder = AppUtils.get(
        	["rootContainer", "mainView", "cardView", "naturalInputOrder"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.ToggleInputOrderOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



