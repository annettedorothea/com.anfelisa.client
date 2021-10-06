/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateReverseBoxCommand from "../../../src/category/commands/CreateReverseBoxCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractCreateReverseBoxAction extends Action {

    constructor(callback) {
        super('category.CreateReverseBoxAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateReverseBoxCommand();
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



