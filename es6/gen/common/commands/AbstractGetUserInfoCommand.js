/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractGetUserInfoCommand extends AsynchronousCommand {
    constructor() {
        super("common.GetUserInfoCommand");
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

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(
					`${AppUtils.settings.rootPath}/user/info`, 
					data.uuid, 
					true).then((response) => {
				data.username = response.username;
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
				events.push(new Event('common.GetUserInfoOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new RouteChangedAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("error")) {
				events.push(new Event('common.GetUserInfoErrorEvent'));
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



