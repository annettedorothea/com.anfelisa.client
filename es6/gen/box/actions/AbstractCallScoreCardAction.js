/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CallScoreCardCommand from "../../../src/box/commands/CallScoreCardCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractCallScoreCardAction extends Action {

    constructor() {
        super('box.CallScoreCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CallScoreCardCommand();
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



