import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/card/commands/ScheduleSelectedCardsCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor() {
        super({}, 'card.ScheduleSelectedCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScheduleSelectedCardsCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
