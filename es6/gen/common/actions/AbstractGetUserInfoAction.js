/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import GetUserInfoCommand from "../../../src/common/commands/GetUserInfoCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractGetUserInfoAction extends Action {

    constructor(callback) {
        super('common.GetUserInfoAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new GetUserInfoCommand();
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



