/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/profile/commands/DeleteUserCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractDeleteUserAction extends Action {

    constructor() {
        super('profile.DeleteUserAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteUserCommand();
	}

	preCall() {
		AppState.merge(
			{display: true}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.merge(
			{display: false}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



