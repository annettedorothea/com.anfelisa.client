/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor() {
        super({}, 'box.LoadBoxStatisticsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadBoxStatisticsCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



