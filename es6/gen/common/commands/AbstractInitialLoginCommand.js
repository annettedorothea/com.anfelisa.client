/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import InitialLoginOkEvent from "../../../gen/common/events/InitialLoginOkEvent";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractInitialLoginCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.InitialLoginCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}
	addUnauthorizedOutcome() {
		this.commandData.outcomes.push("unauthorized");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new InitialLoginOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteChangedAction()).publish());
		}
		if (this.commandData.outcomes.includes("unauthorized")) {
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			promises.push(new TriggerAction(new LogoutAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/user/role`, this.commandData.uuid, true).then((data) => {
				this.commandData.role = data.role;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



