/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoginCommand from "../../../src/registration/commands/LoginCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractLoginAction extends Action {

    constructor() {
        super('registration.LoginAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoginCommand();
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



