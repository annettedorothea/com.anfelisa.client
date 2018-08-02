import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UsernameChangedOkEvent from "../../../gen/password/events/UsernameChangedOkEvent";

export default class AbstractUsernameChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "password.UsernameChangedCommand");
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

/*       S.D.G.       */