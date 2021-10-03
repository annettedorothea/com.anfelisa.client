/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractDeleteBoxAction extends Action {

    constructor(callback) {
        super('box.DeleteBoxAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteBoxCommand();
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



