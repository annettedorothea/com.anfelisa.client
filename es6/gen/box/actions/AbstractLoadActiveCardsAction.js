/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadActiveCardsCommand from "../../../src/box/commands/LoadActiveCardsCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractLoadActiveCardsAction extends Action {

    constructor() {
        super('box.LoadActiveCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadActiveCardsCommand();
	}

	preCall() {
		AppState.merge(
			{display: true}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.merge(
			{display: false}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



