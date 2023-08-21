/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayErrorToastAction from "../../../src/common/actions/DisplayErrorToastAction";

export default class AbstractDeleteUserCommand extends AsynchronousCommand {
    constructor() {
        super("profile.DeleteUserCommand");
    }
    
    initCommandData(data) {
        data.usernameToBeDeleted = AppState.get(
        	["rootContainer", "mainView", "profileView", "username", "value"]
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
	
	allMandatoryValuesAreSet(data) {
		if (data.usernameToBeDeleted === undefined || data.usernameToBeDeleted === null) {
			console.warn("AbstractDeleteUserCommand: usernameToBeDeleted is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
				AppUtils.httpDelete(
						`${AppUtils.settings.rootPath}/user/delete?${data.usernameToBeDeleted ? `usernameToBeDeleted=${data.usernameToBeDeleted}` : ""}`, 
						data.uuid, 
						true)
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
				events.push(new Event('profile.DeleteUserOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LogoutAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("error")) {
				events.push(new Event('profile.DeleteUserErrorEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadUserAction(), 
						data: {
						}
					}
				);
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
						action: new LogoutAction(), 
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



