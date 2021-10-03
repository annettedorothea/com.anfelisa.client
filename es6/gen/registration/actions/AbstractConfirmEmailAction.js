/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ConfirmEmailCommand from "../../../src/registration/commands/ConfirmEmailCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractConfirmEmailAction extends Action {

    constructor(callback) {
        super('registration.ConfirmEmailAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ConfirmEmailCommand();
	}

	preCall() {
		AppUtils.set(
			{display: true}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set(
			{display: false}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



