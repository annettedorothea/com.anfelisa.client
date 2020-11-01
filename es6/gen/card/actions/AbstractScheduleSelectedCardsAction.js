/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/card/commands/ScheduleSelectedCardsCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor() {
        super({}, 'card.ScheduleSelectedCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ScheduleSelectedCardsCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



