/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortSelectedCardsOutCommand from "../../../src/card/commands/SortSelectedCardsOutCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractSortSelectedCardsOutAction extends Action {

    constructor() {
        super({}, 'card.SortSelectedCardsOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortSelectedCardsOutCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



