/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractUpdateCardCommand extends AsynchronousCommand {
    constructor() {
        super("card.UpdateCardCommand");
    }
    
    initCommandData(data) {
        data.wanted = AppUtils.get(["rootContainer", ["mainView", "authorView"], "cardView", "editedCard", "wanted"]);
        data.given = AppUtils.get(["rootContainer", ["mainView", "authorView"], "cardView", "editedCard", "given"]);
        data.cardId = AppUtils.get(["rootContainer", ["mainView", "authorView"], "cardView", "editedCard", "cardId"]);
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardId : data.cardId,
	    		given : data.given,
	    		wanted : data.wanted
	    	};
			AppUtils.httpPut(`${AppUtils.settings.rootPath}/card/update`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.UpdateCardOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publish(
				new LoadCardsAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



