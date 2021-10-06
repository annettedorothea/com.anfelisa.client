/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import InviteUserCommand from "../../../src/category/commands/InviteUserCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractInviteUserAction extends Action {

    constructor(callback) {
        super('category.InviteUserAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new InviteUserCommand();
	}

	preCall() {
		AppState.set(
			{display: true}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.set(
			{display: false}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



