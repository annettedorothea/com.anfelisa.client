/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/card/commands/ScheduleSelectedCardsCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor() {
        super('card.ScheduleSelectedCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ScheduleSelectedCardsCommand();
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



