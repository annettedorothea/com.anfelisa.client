/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortCardOutCommand from "../../../src/box/commands/SortCardOutCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractSortCardOutAction extends Action {

    constructor() {
        super({}, 'box.SortCardOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortCardOutCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



