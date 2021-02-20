/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelInviteUserOkEvent from "../../../gen/category/events/CancelInviteUserOkEvent";

export default class AbstractCancelInviteUserCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CancelInviteUserCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new CancelInviteUserOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/


