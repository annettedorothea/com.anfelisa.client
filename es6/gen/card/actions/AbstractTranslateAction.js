/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/card/commands/TranslateCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractTranslateAction extends Action {

    constructor() {
        super('card.TranslateAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new TranslateCommand();
	}

	preCall() {
		AppState.set(
			{displaySpinner: true}, 
			["rootContainer", "mainView", "authorView", "cardView", "newCard", "displaySpinner"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.set(
			{displaySpinner: false}, 
			["rootContainer", "mainView", "authorView", "cardView", "newCard", "displaySpinner"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



