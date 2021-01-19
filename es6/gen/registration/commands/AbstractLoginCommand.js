/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import LoginOkEvent from "../../../gen/registration/events/LoginOkEvent";
import GetRoleAction from "../../../src/login/actions/GetRoleAction";

export default class AbstractLoginCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "registration.LoginCommand");
        this.commandData.outcomes = [];
        this.commandData.username = AppState.get_registrationView_username();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new LoginOkEvent(this.commandData).publish();
			new TriggerAction(new GetRoleAction()).publish();
		}
    }
}




/******* S.D.G. *******/



