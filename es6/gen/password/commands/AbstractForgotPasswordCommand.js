/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import RouteToDefaultAction from "../../../src/common/actions/RouteToDefaultAction";

export default class AbstractForgotPasswordCommand extends AsynchronousCommand {
    constructor() {
        super("password.ForgotPasswordCommand");
    }
    
    initCommandData(data) {
        data.language = AppState.get(
        	["rootContainer", "language"]
        )
        ;
        data.username = AppState.get(
        	["rootContainer", "mainView", "forgotPasswordView", "username", "value"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.username === undefined || data.username === null) {
			console.warn("AbstractForgotPasswordCommand: username is mandatory but is not set", data);
			return false;
		}
		if (data.language === undefined || data.language === null) {
			console.warn("AbstractForgotPasswordCommand: language is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		username : data.username,
		    		language : data.language
		    	};
				AppUtils.httpPost(
						`${AppUtils.settings.rootPath}/users/forgot-password`, 
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
				events.push(new Event('password.ForgotPasswordOkEvent'));
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
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



