/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateRootCategoryCommand from "../../../src/box/commands/CreateRootCategoryCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractCreateRootCategoryAction extends Action {

    constructor(callback) {
        super('box.CreateRootCategoryAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateRootCategoryCommand();
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



