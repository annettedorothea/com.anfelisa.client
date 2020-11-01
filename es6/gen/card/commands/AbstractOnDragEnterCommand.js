/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import OnDragEnterOkEvent from "../../../gen/card/events/OnDragEnterOkEvent";

export default class AbstractOnDragEnterCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.OnDragEnterCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new OnDragEnterOkEvent(this.commandData).publish();
			break;
		default:
			throw 'OnDragEnterCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



