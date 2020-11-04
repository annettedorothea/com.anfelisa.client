/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelNewCardOkEvent from "../../../gen/card/events/CancelNewCardOkEvent";

export default class AbstractCancelNewCardCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.CancelNewCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelNewCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelNewCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



