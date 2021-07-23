/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractSortSelectedCardsOutCommand extends AsynchronousCommand {
    constructor() {
        super("card.SortSelectedCardsOutCommand");
    }
    
    initCommandData(data) {
        data.cardIds = AppState.get_rootContainer_authorView_cardView_selectedCardIds();
        data.boxId = AppState.get_rootContainer_authorView_boxId();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : data.cardIds,
	    		boxId : data.boxId
	    	};
			AppUtils.httpPost(`${Utils.settings.rootPath}/cards/sort-out`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new TriggerAction().publish(
				new LoadCardsAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



