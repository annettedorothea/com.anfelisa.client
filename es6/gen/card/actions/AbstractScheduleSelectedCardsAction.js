/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/card/commands/ScheduleSelectedCardsCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor() {
        super('card.ScheduleSelectedCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ScheduleSelectedCardsCommand();
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



