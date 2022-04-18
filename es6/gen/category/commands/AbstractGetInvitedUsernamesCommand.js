/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractGetInvitedUsernamesCommand extends AsynchronousCommand {
    constructor() {
        super("category.GetInvitedUsernamesCommand");
    }
    
    initCommandData(data) {
        data.categoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "categoryId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(
					`${AppUtils.settings.rootPath}/category/invited-usernames?${data.categoryId ? `categoryId=${data.categoryId}` : ""}`, 
					data.uuid, 
					true)
				.then((response) => {
					data.invitedUsers = response.invitedUsers;
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
				events.push(new Event('category.GetInvitedUsernamesOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



