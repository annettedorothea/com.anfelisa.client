/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractRegisterUserCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "registration.RegisterUserCommand");
        this.ok = "ok";
        this.error = "error";
        this.commandData.email = AppState.get_registrationView_email();
        this.commandData.language = AppState.get_language();
        this.commandData.username = AppState.get_registrationView_username();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		case this.error:
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RegisterUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		password : this.commandData.password,
	    		username : this.commandData.username,
	    		email : this.commandData.email,
	    		language : this.commandData.language
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/users/register`, this.commandData.uuid, false, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



