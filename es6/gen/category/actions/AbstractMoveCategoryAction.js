/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import MoveCategoryCommand from "../../../src/category/commands/MoveCategoryCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractMoveCategoryAction extends Action {

    constructor(callback) {
        super('category.MoveCategoryAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new MoveCategoryCommand();
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



