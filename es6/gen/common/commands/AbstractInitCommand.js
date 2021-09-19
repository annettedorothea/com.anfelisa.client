/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import InitialLoginAction from "../../../src/common/actions/InitialLoginAction";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractInitCommand extends SynchronousCommand {
    constructor() {
        super("common.InitCommand");
    }

    initCommandData(data) {
        data.username = AppUtils.getStorage(
        	["rootContainer", "username"]
        );
        data.password = AppUtils.getStorage(
        	["rootContainer", "password"]
        );
        data.outcomes = [];
    }

	addUserOutcome(data) {
		data.outcomes.push("user");
	}
	addNoUserOutcome(data) {
		data.outcomes.push("noUser");
	}

    publishEvents(data) {
		if (data.outcomes.includes("user")) {
			new Event('common.InitUserEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new InitialLoginAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("noUser")) {
			new Event('common.InitNoUserEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new RouteChangedAction(), 
					{
					}
			)
		}
    }
}




/******* S.D.G. *******/



