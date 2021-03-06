/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import TooManyCardsStatusOkEvent from "../../../gen/box/events/TooManyCardsStatusOkEvent";

export default class AbstractTooManyCardsStatusCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.TooManyCardsStatusCommand");
        this.commandData.outcomes = [];
        this.commandData.maxCardsPerDay = AppState.get_boxSettingsView_maxCardsPerDay();
        this.commandData.maxInterval = AppState.get_boxSettingsView_maxInterval();
        this.commandData.allActiveCards = AppState.get_boxSettingsView_allActiveCards();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new TooManyCardsStatusOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



