/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractDeleteCardCommand extends AsynchronousCommand {
    constructor() {
        super("card.DeleteCardCommand");
    }
    
    initCommandData(data) {
        data.cardId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "deleteCard", "cardId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.cardId === undefined || data.cardId === null) {
			console.warn("AbstractDeleteCardCommand: cardId is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
				AppUtils.httpDelete(
						`${AppUtils.settings.rootPath}/card/delete?${data.cardId ? `cardId=${data.cardId}` : ""}`, 
						data.uuid, 
						true)
					.then(() => {
						this.handleResponse(data, resolve, reject);
					}, (error) => {
						data.error = error;
						this.handleError(data, resolve, reject);
					})
					.catch(x => reject(x));
			} else {
				resolve(data);
			}
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('card.DeleteCardOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadCardsAction(), 
						data: {
						}
					}
				);
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



