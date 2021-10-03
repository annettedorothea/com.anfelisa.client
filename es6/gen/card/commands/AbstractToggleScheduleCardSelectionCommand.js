/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractToggleScheduleCardSelectionCommand extends SynchronousCommand {
    constructor() {
        super("card.ToggleScheduleCardSelectionCommand");
    }

    initCommandData(data) {
        data.selectedCardIds = AppUtils.get(
        	["rootContainer", "mainView", "cardView", "selectedCardIds"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.ToggleScheduleCardSelectionOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



