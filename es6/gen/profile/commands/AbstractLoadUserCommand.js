/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadUserOkEvent from "../../../gen/profile/events/LoadUserOkEvent";

export default class AbstractLoadUserCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "profile.LoadUserCommand");
        this.ok = "ok";
        this.commandData.role = AppState.get_loggedInUser_role();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadUserOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/user/get`, this.commandData.uuid, true).then((data) => {
				this.commandData.email = data.email;
				this.commandData.username = data.username;
				this.commandData.userId = data.userId;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



