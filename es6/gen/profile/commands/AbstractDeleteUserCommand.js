/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractDeleteUserCommand extends AsynchronousCommand {
    constructor() {
        super("profile.DeleteUserCommand");
    }
    
    initCommandData(data) {
        data.usernameToBeDeleted = AppUtils.get(
        	["rootContainer", "mainView", "username"]
        );
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
			AppUtils.httpDelete(`${AppUtils.settings.rootPath}/user/delete?usernameToBeDeleted=${data.usernameToBeDeleted}`, data.uuid, true).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('profile.DeleteUserOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LogoutAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("error")) {
			new Event('profile.DeleteUserErrorEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadUserAction(), 
					{
					}
			)
			new TriggerAction().publish(
				new DisplayToastAction(), 
					{
						message: data.message, 
						error: data.error
					}
			)
			new TriggerAction().publish(
				new LogoutAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



