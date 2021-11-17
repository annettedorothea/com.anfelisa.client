/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractDeleteBoxAction extends Action {

    constructor() {
        super('box.DeleteBoxAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteBoxCommand();
	}

	preCall() {
		AppState.set(
			{display: true}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.set(
			{display: false}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



