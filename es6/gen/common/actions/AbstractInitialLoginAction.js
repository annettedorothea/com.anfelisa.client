import Action from "../../ace/AsynchronousAction";
import InitialLoginCommand from "../../../src/common/commands/InitialLoginCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractInitialLoginAction extends Action {

    constructor( hash) {
        super({hash}, 'common.InitialLoginAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InitialLoginCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
