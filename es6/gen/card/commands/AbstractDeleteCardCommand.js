/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractDeleteCardCommand extends AsynchronousCommand {
    constructor() {
        super("card.DeleteCardCommand");
    }
    
    initCommandData(data) {
        data.cardId = AppUtils.get(
        	["rootContainer", "mainView", "cardView", "deleteCard", "cardId"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpDelete(`${AppUtils.settings.rootPath}/card/delete?cardId=${data.cardId}`, data.uuid, true).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.DeleteCardOkEvent').publish(data);
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



