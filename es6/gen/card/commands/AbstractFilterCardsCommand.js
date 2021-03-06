/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import FilterCardsOkEvent from "../../../gen/card/events/FilterCardsOkEvent";

export default class AbstractFilterCardsCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.FilterCardsCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new FilterCardsOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



