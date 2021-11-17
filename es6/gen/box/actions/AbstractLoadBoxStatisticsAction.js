/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";
import * as AppState from "../../../src/AppState";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor() {
        super('box.LoadBoxStatisticsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadBoxStatisticsCommand();
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



