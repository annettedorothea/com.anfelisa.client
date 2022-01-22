/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoginCommand extends AsynchronousCommand {
    constructor() {
        super("login.LoginCommand");
    }
    
    initCommandData(data) {
        data.username = AppState.get(
        	["rootContainer", "mainView", "loginView", "username"]
        )
        ;
        data.password = AppState.get(
        	["rootContainer", "mainView", "loginView", "password"]
        )
        ;
        data.saveInLocalStorage = AppState.get(
        	["rootContainer", "mainView", "loginView", "saveInLocalStorage"]
        )
        ;
        data.outcomes = [];
    }

	addSaveInLocalStorageOutcome(data) {
		data.outcomes.push("saveInLocalStorage");
	}
	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addUnauthorizedOutcome(data) {
		data.outcomes.push("unauthorized");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		username : data.username,
	    		password : data.password
	    	};
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/user/token`, 
					data.uuid, 
					false,
					 payload).then((response) => {
				data.token = response.token;
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
			if (data.outcomes.includes("saveInLocalStorage")) {
				events.push(new Event('login.LoginSaveInLocalStorageEvent'));
			}
			if (data.outcomes.includes("ok")) {
				events.push(new Event('login.LoginOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new RouteAction(), 
						data: {
							hash: data.hash
						}
					}
				);
			}
			if (data.outcomes.includes("unauthorized")) {
				events.push(new Event('login.LoginUnauthorizedEvent'));
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



