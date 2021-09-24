/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardPriorityCommand from "../../../src/card/commands/UpdateCardPriorityCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUpdateCardPriorityAction extends Action {

    constructor() {
        super('card.UpdateCardPriorityAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardPriorityCommand();
	}

	preCall() {
		AppUtils.set(
			{display: true}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set(
			{display: false}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



