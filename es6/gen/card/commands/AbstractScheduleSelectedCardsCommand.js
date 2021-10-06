/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor() {
        super("card.ScheduleSelectedCardsCommand");
    }
    
    initCommandData(data) {
        data.cardIds = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "selectedCardIds"]
        )
        ;
        data.boxId = AppState.get(
        	["rootContainer", "mainView", "authorView", "boxId"]
        )
        ;
        data.filterNonScheduled = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "filterNonScheduled"]
        )
        ;
        data.outcomes = [];
    }

	addNoFilterOutcome(data) {
		data.outcomes.push("noFilter");
	}
	addFilterOutcome(data) {
		data.outcomes.push("filter");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : data.cardIds,
	    		boxId : data.boxId
	    	};
			AppUtils.httpPost(`${AppUtils.settings.rootPath}/cards/schedule`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("noFilter")) {
			new TriggerAction().publish(
				new LoadCardsAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("filter")) {
			new TriggerAction().publish(
				new ReloadCategoryTreeAction(), 
					{
						selectedCategoryId: data.selectedCategoryId, 
						categoryIdToBeExpanded: data.categoryIdToBeExpanded
					}
			)
		}
    }

}



/******* S.D.G. *******/



