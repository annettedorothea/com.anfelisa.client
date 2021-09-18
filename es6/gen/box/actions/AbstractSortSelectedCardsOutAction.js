/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortSelectedCardsOutCommand from "../../../src/box/commands/SortSelectedCardsOutCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractSortSelectedCardsOutAction extends Action {

    constructor() {
        super('box.SortSelectedCardsOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortSelectedCardsOutCommand();
	}

	preCall() {
		AppUtils.set({display: true}, ["rootContainer", "spinner", "display"])
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set({display: false}, ["rootContainer", "spinner", "display"])
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



