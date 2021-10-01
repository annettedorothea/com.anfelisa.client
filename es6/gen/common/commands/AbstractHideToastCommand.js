/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import DestroyToastAction from "../../../src/common/actions/DestroyToastAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractHideToastCommand extends SynchronousCommand {
    constructor() {
        super("common.HideToastCommand");
    }

    initCommandData(data) {
        data.messages = AppUtils.get(
        	["rootContainer", "messages"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.HideToastOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publishWithDelay(
				new DestroyToastAction(), 
					{
						id: data.id
					},
				1200
			)
		}
    }
}




/******* S.D.G. *******/



