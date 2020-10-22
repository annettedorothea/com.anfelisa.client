/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import ClearToastOkEvent from "../../../gen/common/events/ClearToastOkEvent";

export default class AbstractClearToastCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.ClearToastCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ClearToastOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ClearToastCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



