/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractResetPasswordCommand extends AsynchronousCommand {
    constructor() {
        super("password.ResetPasswordCommand");
    }
    
    initCommandData(data) {
        data.token = AppState.get_rootContainer_resetPasswordView_token();
        data.password = AppState.get_rootContainer_resetPasswordView_password();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addErrorOutcome(data) {
		data.outcomes.push("error");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		password : data.password,
	    		token : data.token
	    	};
			AppUtils.httpPut(`${AppUtils.settings.rootPath}/users/resetpassword`, data.uuid, false, payload).then(() => {
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
		if (data.outcomes.includes("error")) {
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



