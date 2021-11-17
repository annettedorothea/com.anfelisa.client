/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortSelectedCardsOutCommand from "../../../src/card/commands/SortSelectedCardsOutCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractSortSelectedCardsOutAction extends Action {

    constructor() {
        super('card.SortSelectedCardsOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortSelectedCardsOutCommand();
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



