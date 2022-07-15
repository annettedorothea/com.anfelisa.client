/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SortCardOutCommand from "../../../src/box/commands/SortCardOutCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractSortCardOutAction extends Action {

    constructor() {
        super('box.SortCardOutAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SortCardOutCommand();
	}

	preCall() {
		AppState.merge(
			{display: true}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.merge(
			{disableSortOutButton: true}, 
			["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
		)
		AppState.stateUpdated();
	}
	
	postCall() {
		AppState.merge(
			{display: false}, 
			["rootContainer", "spinner", "display"]
		)
		AppState.merge(
			{disableSortOutButton: false}, 
			["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
		)
		AppState.stateUpdated();
	}

}




/******* S.D.G. *******/



