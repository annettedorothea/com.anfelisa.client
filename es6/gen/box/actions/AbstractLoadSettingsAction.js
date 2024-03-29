/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadSettingsCommand from "../../../src/box/commands/LoadSettingsCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractLoadSettingsAction extends Action {

    constructor() {
        super('box.LoadSettingsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadSettingsCommand();
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



