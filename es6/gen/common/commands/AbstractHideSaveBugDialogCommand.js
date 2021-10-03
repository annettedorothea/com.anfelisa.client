/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractHideSaveBugDialogCommand extends SynchronousCommand {
    constructor() {
        super("common.HideSaveBugDialogCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.HideSaveBugDialogOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new DisplayToastAction(), 
					{
						message: data.message, 
						error: data.error
					}
			)
		}
    }
}




/******* S.D.G. *******/



