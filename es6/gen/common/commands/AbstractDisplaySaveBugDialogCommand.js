/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DisplaySaveBugDialogOkEvent from "../../../gen/common/events/DisplaySaveBugDialogOkEvent";

export default class AbstractDisplaySaveBugDialogCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.DisplaySaveBugDialogCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplaySaveBugDialogOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplaySaveBugDialogCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



