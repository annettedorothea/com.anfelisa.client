/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadActiveCardsAction from "../../../src/box/actions/LoadActiveCardsAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.ScheduleSelectedCardsCommand");
        this.commandData.cardIds = AppState.get_allActiveCardsView_selectedCardIds();
        this.commandData.boxId = AppState.get_allActiveCardsView_boxId();
        this.commandData.outcomes = [];
    }

	addNoFilterOutcome() {
		this.commandData.outcomes.push("noFilter");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("noFilter")) {
			promises.push(new TriggerAction(new LoadActiveCardsAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : this.commandData.cardIds,
	    		boxId : this.commandData.boxId
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/active-cards/schedule`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



