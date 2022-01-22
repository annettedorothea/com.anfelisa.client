/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractInviteUserCommand extends AsynchronousCommand {
    constructor() {
        super("category.InviteUserCommand");
    }
    
    initCommandData(data) {
        data.categoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "categoryId"]
        )
        ;
        data.editable = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog", "editable"]
        )
        ;
        data.invitedUsername = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog", "invitedUsername"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryId : data.categoryId,
	    		invitedUsername : data.invitedUsername,
	    		editable : data.editable
	    	};
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/category/invite`, 
					data.uuid, 
					true,
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
				events.push(new Event('category.InviteUserOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}


}



/******* S.D.G. *******/



