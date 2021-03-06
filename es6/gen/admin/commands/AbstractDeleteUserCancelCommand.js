/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DeleteUserCancelOkEvent from "../../../gen/admin/events/DeleteUserCancelOkEvent";

export default class AbstractDeleteUserCancelCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "admin.DeleteUserCancelCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DeleteUserCancelOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



