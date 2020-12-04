/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.ScheduleSelectedCardsCommand");
        this.commandData.selectedCardIds = AppState.get_authorView_cardView_selectedCardIds();
        this.commandData.filterNonScheduled = AppState.get_authorView_filterNonScheduled();
        this.commandData.outcomes = [];
    }

	addNoFilterOutcome() {
		this.commandData.outcomes.push("noFilter");
	}
	addFilterOutcome() {
		this.commandData.outcomes.push("filter");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("noFilter")) {
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
		}
		if (this.commandData.outcomes.includes("filter")) {
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : this.commandData.cardIds
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/cards/schedule`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



