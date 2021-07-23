/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import * as AppState from "../../ace/AppState";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractDeleteBoxAction extends Action {

    constructor() {
        super('box.DeleteBoxAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteBoxCommand();
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



