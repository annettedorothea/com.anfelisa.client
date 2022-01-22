/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractConfirmEmailCommand extends AsynchronousCommand {
    constructor() {
        super("registration.ConfirmEmailCommand");
    }
    
    initCommandData(data) {
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
	    		token : data.token,
	    		username : data.username
	    	};
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/users/confirm`, 
					data.uuid, 
					false,
					 payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('registration.ConfirmEmailOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayToastAction(), 
						data: {
							message: data.message, 
							error: data.error, 
							warning: data.warning
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
				events.push(new Event('registration.ConfirmEmailErrorEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayToastAction(), 
						data: {
							message: data.message, 
							error: data.error, 
							warning: data.warning
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



