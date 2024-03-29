/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ConfirmEmailCommand from "../../../src/registration/commands/ConfirmEmailCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractConfirmEmailAction extends Action {

    constructor() {
        super('registration.ConfirmEmailAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ConfirmEmailCommand();
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



