/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractToggleCardOrderCommand extends AsynchronousCommand {
    constructor() {
        super("card.ToggleCardOrderCommand");
    }
    
    initCommandData(data) {
        data.selectedCardIds = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "selectedCardIds"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.down === undefined || data.down === null) {
			console.warn("AbstractToggleCardOrderCommand: down is mandatory but is not set", data);
			return false;
		}
		if (data.cardId === undefined || data.cardId === null) {
			console.warn("AbstractToggleCardOrderCommand: cardId is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		down : data.down,
		    		cardId : data.cardId
		    	};
				AppUtils.httpPut(
						`${AppUtils.settings.rootPath}/cards/changeorder`, 
						data.uuid, 
						true,
						 payload)
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
				events.push(new Event('card.ToggleCardOrderOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadCardsAction(), 
						data: {
							keepSelectedCards: data.keepSelectedCards
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



