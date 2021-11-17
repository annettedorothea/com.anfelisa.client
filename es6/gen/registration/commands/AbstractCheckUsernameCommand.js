/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractCheckUsernameCommand extends AsynchronousCommand {
    constructor() {
        super("registration.CheckUsernameCommand");
    }
    
    initCommandData(data) {
        data.username = AppState.get(
        	["rootContainer", "mainView", "registrationView", "username"]
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

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(
					`${AppUtils.settings.rootPath}/users/username?${data.username ? `username=${data.username}` : ""}`, 
					data.uuid, 
					false).then((response) => {
				data.available = response.available;
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
			if (data.outcomes.includes("empty")) {
				events.push(new Event('registration.CheckUsernameEmptyEvent'));
			}
			if (data.outcomes.includes("ok")) {
				events.push(new Event('registration.CheckUsernameOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}


}



/******* S.D.G. *******/



