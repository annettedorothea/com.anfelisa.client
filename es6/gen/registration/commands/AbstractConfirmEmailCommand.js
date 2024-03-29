/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteToDefaultAction from "../../../src/common/actions/RouteToDefaultAction";
import DisplayErrorToastAction from "../../../src/common/actions/DisplayErrorToastAction";

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
	
	allMandatoryValuesAreSet(data) {
		if (data.token === undefined || data.token === null) {
			console.warn("AbstractConfirmEmailCommand: token is mandatory but is not set", data);
			return false;
		}
		if (data.username === undefined || data.username === null) {
			console.warn("AbstractConfirmEmailCommand: username is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		token : data.token,
		    		username : data.username
		    	};
				AppUtils.httpPut(
						`${AppUtils.settings.rootPath}/users/confirm`, 
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
			} else {
				resolve(data);
			}
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
							textKey: data.textKey, 
							args: data.args
						}
					}
				);
				actionsToBeTriggered.push(
					{
						action: new RouteToDefaultAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("error")) {
				events.push(new Event('registration.ConfirmEmailErrorEvent'));
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
						action: new RouteToDefaultAction(), 
						data: {
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



