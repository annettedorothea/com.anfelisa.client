/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import ValidateAction from "../../../src/registration/actions/ValidateAction";

export default class AbstractCheckUsernameCommand extends AsynchronousCommand {
    constructor() {
        super("registration.CheckUsernameCommand");
    }
    
    initCommandData(data) {
        data.username = AppState.get(
        	["rootContainer", "mainView", "registrationView", "username", "value"]
        )
        ;
        data.outcomes = [];
    }

	addEmptyOutcome(data) {
		data.outcomes.push("empty");
	}
	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (!data.username) {
			console.warn("AbstractCheckUsernameCommand: username is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
				AppUtils.httpGet(
						`${AppUtils.settings.rootPath}/users/username?${data.username ? `username=${data.username}` : ""}`, 
						data.uuid, 
						false)
					.then((response) => {
						data.available = response.available;
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
			if (data.outcomes.includes("empty")) {
				events.push(new Event('registration.CheckUsernameEmptyEvent'));
				actionsToBeTriggered.push(
					{
						action: new ValidateAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("ok")) {
				events.push(new Event('registration.CheckUsernameOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new ValidateAction(), 
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



