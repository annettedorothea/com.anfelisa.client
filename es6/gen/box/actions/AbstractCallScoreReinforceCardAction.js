/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CallScoreReinforceCardCommand from "../../../src/box/commands/CallScoreReinforceCardCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractCallScoreReinforceCardAction extends Action {

    constructor() {
        super('box.CallScoreReinforceCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CallScoreReinforceCardCommand();
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



