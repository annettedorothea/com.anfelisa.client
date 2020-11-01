/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ConfirmEmailCommand from "../../../src/registration/commands/ConfirmEmailCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractConfirmEmailAction extends Action {

    constructor( username, token) {
        super({username, token}, 'registration.ConfirmEmailAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



