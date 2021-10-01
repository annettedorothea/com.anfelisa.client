/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortSelectedCardsOutCommand from "../../../src/card/commands/SortSelectedCardsOutCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractSortSelectedCardsOutAction extends Action {

    constructor() {
        super('card.SortSelectedCardsOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortSelectedCardsOutCommand();
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



