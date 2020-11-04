/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import MoveCategoryCommand from "../../../src/category/commands/MoveCategoryCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractMoveCategoryAction extends Action {

    constructor() {
        super({}, 'category.MoveCategoryAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new MoveCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



