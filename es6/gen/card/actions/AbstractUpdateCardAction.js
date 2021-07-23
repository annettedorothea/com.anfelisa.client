/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardCommand from "../../../src/card/commands/UpdateCardCommand";
import * as AppState from "../../ace/AppState";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUpdateCardAction extends Action {

    constructor() {
        super('card.UpdateCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardCommand();
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
		AppUtils.stateUpdated(AppState.getAppState());
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
		AppUtils.stateUpdated(AppState.getAppState());
	}

}




/******* S.D.G. *******/



