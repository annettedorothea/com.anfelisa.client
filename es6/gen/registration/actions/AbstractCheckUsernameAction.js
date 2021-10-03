/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CheckUsernameCommand from "../../../src/registration/commands/CheckUsernameCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractCheckUsernameAction extends Action {

    constructor(callback) {
        super('registration.CheckUsernameAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CheckUsernameCommand();
	}

	preCall() {
		AppUtils.set(
			{displayUsernameSpinner: true}, 
			["rootContainer", "mainView", "displayUsernameSpinner"], 
			[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
		)
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set(
			{displayUsernameSpinner: false}, 
			["rootContainer", "mainView", "displayUsernameSpinner"], 
			[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
		)
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



