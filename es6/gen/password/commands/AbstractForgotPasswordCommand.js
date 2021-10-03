/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractForgotPasswordCommand extends AsynchronousCommand {
    constructor() {
        super("password.ForgotPasswordCommand");
    }
    
    initCommandData(data) {
        data.language = AppUtils.get(
        	["rootContainer", "language"]
        );
        data.username = AppUtils.get(
        	["rootContainer", "mainView", "username"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		username : data.username,
	    		language : data.language
	    	};
			AppUtils.httpPost(`${AppUtils.settings.rootPath}/users/forgot-password`, data.uuid, false, payload).then(() => {
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
				new DisplayToastAction(), 
					{
						message: data.message, 
						error: data.error
					}
			)
			new TriggerAction().publish(
				new RouteAction(), 
					{
						hash: data.hash
					}
			)
		}
    }

}



/******* S.D.G. *******/



