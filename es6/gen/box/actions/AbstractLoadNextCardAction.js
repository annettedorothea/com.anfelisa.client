/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadNextCardAction extends Action {

    constructor() {
        super({}, 'box.LoadNextCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
	}

}




/******* S.D.G. *******/



