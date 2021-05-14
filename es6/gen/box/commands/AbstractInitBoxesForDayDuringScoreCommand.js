/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractInitBoxesForDayDuringScoreCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.InitBoxesForDayDuringScoreCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new TriggerAction(new LoadNextCardAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		todayAtMidnightInUTC : this.commandData.todayAtMidnightInUTC
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/box/init`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



