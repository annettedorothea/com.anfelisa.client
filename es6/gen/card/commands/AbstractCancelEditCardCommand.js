/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelEditCardOkEvent from "../../../gen/card/events/CancelEditCardOkEvent";

export default class AbstractCancelEditCardCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.CancelEditCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelEditCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelEditCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



