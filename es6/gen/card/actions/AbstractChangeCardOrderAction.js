/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ChangeCardOrderCommand from "../../../src/card/commands/ChangeCardOrderCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractChangeCardOrderAction extends Action {

    constructor() {
        super('card.ChangeCardOrderAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ChangeCardOrderCommand();
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



