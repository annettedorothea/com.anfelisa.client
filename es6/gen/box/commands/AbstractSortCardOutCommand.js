/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import InitBoxesForDayDuringScoreAction from "../../../src/box/actions/InitBoxesForDayDuringScoreAction";

export default class AbstractSortCardOutCommand extends AsynchronousCommand {
    constructor() {
        super("box.SortCardOutCommand");
    }
    
    initCommandData(data) {
        data.cardId = AppUtils.get(
        	["rootContainer", "mainView", "nextCard", "cardId"]
        );
        data.boxId = AppUtils.get(
        	["rootContainer", "mainView", "boxId"]
        );
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
			AppUtils.httpPost(`${AppUtils.settings.rootPath}/cards/sort-out`, data.uuid, true, payload).then(() => {
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
				new InitBoxesForDayDuringScoreAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



