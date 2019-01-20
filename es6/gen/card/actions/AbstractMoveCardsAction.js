import Action from "../../ace/AsynchronousAction";
import MoveCardsCommand from "../../../src/card/commands/MoveCardsCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractMoveCardsAction extends Action {

    constructor() {
        super({}, 'card.MoveCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new MoveCardsCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
