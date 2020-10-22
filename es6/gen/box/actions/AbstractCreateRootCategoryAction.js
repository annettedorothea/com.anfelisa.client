/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateRootCategoryCommand from "../../../src/box/commands/CreateRootCategoryCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractCreateRootCategoryAction extends Action {

    constructor() {
        super({}, 'box.CreateRootCategoryAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateRootCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



