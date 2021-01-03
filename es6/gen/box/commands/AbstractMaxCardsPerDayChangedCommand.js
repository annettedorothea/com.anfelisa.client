/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import MaxCardsPerDayChangedOkEvent from "../../../gen/box/events/MaxCardsPerDayChangedOkEvent";

export default class AbstractMaxCardsPerDayChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.MaxCardsPerDayChangedCommand");
        this.commandData.outcomes = [];
        this.commandData.maxInterval = AppState.get_boxSettingsView_maxInterval();
        this.commandData.allActiveCards = AppState.get_boxSettingsView_allActiveCards();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new MaxCardsPerDayChangedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



