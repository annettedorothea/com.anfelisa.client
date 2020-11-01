/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import OnDragExitOkEvent from "../../../gen/card/events/OnDragExitOkEvent";

export default class AbstractOnDragExitCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.OnDragExitCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new OnDragExitOkEvent(this.commandData).publish();
			break;
		default:
			throw 'OnDragExitCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



