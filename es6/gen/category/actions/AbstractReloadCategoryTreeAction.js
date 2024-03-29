/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ReloadCategoryTreeCommand from "../../../src/category/commands/ReloadCategoryTreeCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractReloadCategoryTreeAction extends Action {

    constructor() {
        super('category.ReloadCategoryTreeAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ReloadCategoryTreeCommand();
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



