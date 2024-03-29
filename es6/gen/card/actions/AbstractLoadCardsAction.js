/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadCardsCommand from "../../../src/card/commands/LoadCardsCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractLoadCardsAction extends Action {

    constructor() {
        super('card.LoadCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadCardsCommand();
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



