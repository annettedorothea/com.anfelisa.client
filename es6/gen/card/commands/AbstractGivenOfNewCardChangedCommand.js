/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import GivenOfNewCardChangedOkEvent from "../../../gen/card/events/GivenOfNewCardChangedOkEvent";

export default class AbstractGivenOfNewCardChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.GivenOfNewCardChangedCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new GivenOfNewCardChangedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



