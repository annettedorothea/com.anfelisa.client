/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import EditCardOkEvent from "../../../gen/card/events/EditCardOkEvent";

export default class AbstractEditCardCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.EditCardCommand");
        this.ok = "ok";
        this.commandData.cardList = AppState.get_authorView_cardView_cardList();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



