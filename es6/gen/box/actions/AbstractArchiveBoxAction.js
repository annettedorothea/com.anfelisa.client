/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ArchiveBoxCommand from "../../../src/box/commands/ArchiveBoxCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractArchiveBoxAction extends Action {

    constructor(callback) {
        super('box.ArchiveBoxAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ArchiveBoxCommand();
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



