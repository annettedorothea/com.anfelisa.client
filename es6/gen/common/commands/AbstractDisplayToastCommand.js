/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import HideToastAction from "../../../src/common/actions/HideToastAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractDisplayToastCommand extends SynchronousCommand {
    constructor() {
        super("common.DisplayToastCommand");
    }

    initCommandData(data) {
        data.language = AppState.get(
        	["rootContainer", "language"]
        )
        ;
        data.messages = AppState.get(
        	["rootContainer", "messages"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.DisplayToastOkEvent').publish(data);
			AppState.stateUpdated();
			new TriggerAction().publishWithDelay(
				new HideToastAction(), 
					{
						id: data.id
					},
				5000
			)
		}
    }
}




/******* S.D.G. *******/



