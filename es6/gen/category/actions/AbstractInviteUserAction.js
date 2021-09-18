/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import InviteUserCommand from "../../../src/category/commands/InviteUserCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractInviteUserAction extends Action {

    constructor() {
        super('category.InviteUserAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new InviteUserCommand();
	}

	preCall() {
		AppUtils.set({display: true}, ["rootContainer", "spinner", "display"])
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set({display: false}, ["rootContainer", "spinner", "display"])
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



