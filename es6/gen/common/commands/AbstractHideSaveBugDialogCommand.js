/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import HideSaveBugDialogOkEvent from "../../../gen/common/events/HideSaveBugDialogOkEvent";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractHideSaveBugDialogCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.HideSaveBugDialogCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new HideSaveBugDialogOkEvent(this.commandData).publish();
			new TriggerAction(new DisplayToastAction(this.commandData.message)).publish();
		}
    }
}




/******* S.D.G. *******/



