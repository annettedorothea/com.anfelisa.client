/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DisplaySaveBugDialogOkEvent from "../../../gen/common/events/DisplaySaveBugDialogOkEvent";

export default class AbstractDisplaySaveBugDialogCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.DisplaySaveBugDialogCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DisplaySaveBugDialogOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



