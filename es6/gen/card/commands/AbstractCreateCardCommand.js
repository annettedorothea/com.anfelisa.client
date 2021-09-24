/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractCreateCardCommand extends AsynchronousCommand {
    constructor() {
        super("card.CreateCardCommand");
    }
    
    initCommandData(data) {
        data.wanted = AppUtils.get(
        	["rootContainer", "mainView", "cardView", "newCard", "wanted"]
        );
        data.given = AppUtils.get(
        	["rootContainer", "mainView", "cardView", "newCard", "given"]
        );
        data.categoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "selectedCategory", "categoryId"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		wanted : data.wanted,
	    		given : data.given,
	    		categoryId : data.categoryId
	    	};
			AppUtils.httpPost(`${AppUtils.settings.rootPath}/card/create`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.CreateCardOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadCardsAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



