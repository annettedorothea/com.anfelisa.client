/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractDeleteUserCommand extends AsynchronousCommand {
    constructor() {
        super("profile.DeleteUserCommand");
    }
    
    initCommandData(data) {
        data.usernameToBeDeleted = AppState.get(
        	["rootContainer", "mainView", "profileView", "username"]
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
			AppUtils.httpDelete(
					`${AppUtils.settings.rootPath}/user/delete?${data.usernameToBeDeleted ? `usernameToBeDeleted=${data.usernameToBeDeleted}` : ""}`, 
					data.uuid, 
					true).then(() => {
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
						action: new DisplayToastAction(), 
						data: {
							message: data.message, 
							error: data.error
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



