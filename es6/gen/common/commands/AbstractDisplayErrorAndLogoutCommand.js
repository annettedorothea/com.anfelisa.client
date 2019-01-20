import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayErrorAndLogoutOkEvent from "../../../gen/common/events/DisplayErrorAndLogoutOkEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDisplayErrorAndLogoutCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.DisplayErrorAndLogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayErrorAndLogoutOkEvent(this.commandData).publish();
			new TriggerAction(new LogoutAction()).publish();
			break;
		default:
			throw 'DisplayErrorAndLogoutCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
