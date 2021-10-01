/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
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
			AppUtils.httpGet(`${AppUtils.settings.rootPath}/user/info`, data.uuid, true).then((response) => {
				data.username = response.username;
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.GetUserInfoOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new RouteChangedAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("error")) {
			new TriggerAction().publish(
				new LogoutAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



