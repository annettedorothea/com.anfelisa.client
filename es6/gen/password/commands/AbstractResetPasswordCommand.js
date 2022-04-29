/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayErrorToastAction from "../../../src/common/actions/DisplayErrorToastAction";

export default class AbstractResetPasswordCommand extends AsynchronousCommand {
    constructor() {
        super("password.ResetPasswordCommand");
    }
    
    initCommandData(data) {
        data.token = AppState.get(
        	["rootContainer", "mainView", "resetPasswordView", "token"]
        )
        ;
        data.password = AppState.get(
        	["rootContainer", "mainView", "resetPasswordView", "password"]
        )
        ;
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
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/users/resetpassword`, 
					data.uuid, 
					false,
					 payload)
				.then(() => {
					this.handleResponse(data, resolve, reject);
				}, (error) => {
					data.error = error;
					this.handleError(data, resolve, reject);
				})
				.catch(x => reject(x));
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('password.ResetPasswordOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayToastAction(), 
						data: {
							textKey: data.textKey, 
							args: data.args
						}
					}
				);
				actionsToBeTriggered.push(
					{
						action: new RouteAction(), 
						data: {
							hash: data.hash
						}
					}
				);
			}
			if (data.outcomes.includes("error")) {
				events.push(new Event('password.ResetPasswordErrorEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayErrorToastAction(), 
						data: {
							textKey: data.textKey, 
							args: data.args
						}
					}
				);
				actionsToBeTriggered.push(
					{
						action: new RouteAction(), 
						data: {
							hash: data.hash
						}
					}
				);
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



