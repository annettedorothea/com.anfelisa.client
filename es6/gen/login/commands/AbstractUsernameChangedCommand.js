/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import UsernameChangedOkEvent from "../../../gen/login/events/UsernameChangedOkEvent";

export default class AbstractUsernameChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "login.UsernameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UsernameChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'UsernameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



