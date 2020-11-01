/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadBoxesCommand from "../../../src/box/commands/LoadBoxesCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadBoxesAction extends Action {

    constructor() {
        super({}, 'box.LoadBoxesAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadBoxesCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



