/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractSearchUsernameCommand extends AsynchronousCommand {
    constructor() {
        super("category.SearchUsernameCommand");
    }
    
    initCommandData(data) {
        data.usernameSearchString = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernameSearchString"]
        )
        ;
        data.categoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "categoryId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.usernameSearchString === undefined || data.usernameSearchString === null) {
			console.warn("AbstractSearchUsernameCommand: usernameSearchString is mandatory but is not set", data);
			return false;
		}
		if (data.categoryId === undefined || data.categoryId === null) {
			console.warn("AbstractSearchUsernameCommand: categoryId is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
				AppUtils.httpGet(
						`${AppUtils.settings.rootPath}/users/search?${data.usernameSearchString ? `usernameSearchString=${data.usernameSearchString}` : ""}&${data.categoryId ? `categoryId=${data.categoryId}` : ""}`, 
						data.uuid, 
						true)
					.then((response) => {
						data.usernames = response.usernames;
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
				events.push(new Event('category.SearchUsernameOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



