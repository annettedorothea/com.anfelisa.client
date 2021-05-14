/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/card/commands/DeleteCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractDeleteCardAction extends Action {

    constructor() {
        super({}, 'card.DeleteCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
	}

}




/******* S.D.G. *******/



