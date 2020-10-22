/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import HideSaveBugDialogAction from "../../../src/common/actions/HideSaveBugDialogAction";

export default class AbstractCallSaveBugCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.CallSaveBugCommand");
        this.ok = "ok";
        this.commandData.username = AppState.get_loggedInUser_username();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new HideSaveBugDialogAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CallSaveBugCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    

}




/******* S.D.G. *******/



