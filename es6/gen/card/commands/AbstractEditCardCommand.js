/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import EditCardOkEvent from "../../../gen/card/events/EditCardOkEvent";

export default class AbstractEditCardCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.EditCardCommand");
        this.commandData.outcomes = [];
        this.commandData.cardList = AppState.get_rootContainer_authorView_cardView_cardList();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new EditCardOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



