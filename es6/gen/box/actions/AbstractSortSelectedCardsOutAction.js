/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortSelectedCardsOutCommand from "../../../src/box/commands/SortSelectedCardsOutCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractSortSelectedCardsOutAction extends Action {

    constructor(callback) {
        super('box.SortSelectedCardsOutAction', callback);
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



