/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardPriorityCommand from "../../../src/card/commands/UpdateCardPriorityCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractUpdateCardPriorityAction extends Action {

    constructor( cardId, priority, actualPriority) {
        super({cardId, priority, actualPriority}, 'card.UpdateCardPriorityAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardPriorityCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



