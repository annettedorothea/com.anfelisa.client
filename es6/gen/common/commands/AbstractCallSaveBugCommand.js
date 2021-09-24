/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import HideSaveBugDialogAction from "../../../src/common/actions/HideSaveBugDialogAction";

export default class AbstractCallSaveBugCommand extends AsynchronousCommand {
    constructor() {
        super("common.CallSaveBugCommand");
    }
    
    initCommandData(data) {
        data.username = AppUtils.get(
        	["rootContainer", "loggedInUser", "username"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}


    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new TriggerAction().publish(
				new HideSaveBugDialogAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



