/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import UsernameForgotPasswordChangedOkEvent from "../../../gen/password/events/UsernameForgotPasswordChangedOkEvent";

export default class AbstractUsernameForgotPasswordChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "password.UsernameForgotPasswordChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UsernameForgotPasswordChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'UsernameForgotPasswordChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



