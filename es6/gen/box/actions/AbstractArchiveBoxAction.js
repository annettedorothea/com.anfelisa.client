/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ArchiveBoxCommand from "../../../src/box/commands/ArchiveBoxCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractArchiveBoxAction extends Action {

    constructor() {
        super('box.ArchiveBoxAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ArchiveBoxCommand();
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



