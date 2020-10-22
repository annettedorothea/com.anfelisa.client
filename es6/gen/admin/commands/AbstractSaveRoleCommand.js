/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";

export default class AbstractSaveRoleCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "admin.SaveRoleCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new GetAllUsersAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		newRole : this.commandData.newRole,
	    		editedUserId : this.commandData.editedUserId
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/user/role`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



