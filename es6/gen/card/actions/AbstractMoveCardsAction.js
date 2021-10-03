/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import MoveCardsCommand from "../../../src/card/commands/MoveCardsCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractMoveCardsAction extends Action {

    constructor(callback) {
        super('card.MoveCardsAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new MoveCardsCommand();
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



