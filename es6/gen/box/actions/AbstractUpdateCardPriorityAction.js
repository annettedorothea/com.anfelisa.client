/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardPriorityCommand from "../../../src/box/commands/UpdateCardPriorityCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractUpdateCardPriorityAction extends Action {

    constructor() {
        super('box.UpdateCardPriorityAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardPriorityCommand();
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



