/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import GetAllUsersCommand from "../../../src/admin/commands/GetAllUsersCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractGetAllUsersAction extends Action {

    constructor() {
        super({}, 'admin.GetAllUsersAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new GetAllUsersCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



