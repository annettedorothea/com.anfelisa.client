/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";

export default class AbstractInitBoxesForDayCommand extends AsynchronousCommand {
    constructor() {
        super("box.InitBoxesForDayCommand");
    }
    
    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		todayAtMidnightInUTC : data.todayAtMidnightInUTC
	    	};
			AppUtils.httpPut(`${AppUtils.settings.rootPath}/box/init`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new TriggerAction().publish(
				new LoadBoxesAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



