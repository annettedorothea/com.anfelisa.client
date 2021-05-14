/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LogoutOkEvent from "../../../gen/common/events/LogoutOkEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";

export default class AbstractLogoutCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.LogoutCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new LogoutOkEvent(this.commandData).publish();
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
			new TriggerAction(new RouteChangedAction()).publish();
		}
    }
}




/******* S.D.G. *******/



