/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadActiveCardsAction from "../../../src/box/actions/LoadActiveCardsAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor() {
        super("box.ScheduleSelectedCardsCommand");
    }
    
    initCommandData(data) {
        data.cardIds = AppState.get(
        	["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
        )
        ;
        data.boxId = AppState.get(
        	["rootContainer", "mainView", "allActiveCardsView", "boxId"]
        )
        ;
        data.outcomes = [];
    }

	addNoFilterOutcome(data) {
		data.outcomes.push("noFilter");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.cardIds === undefined || data.cardIds === null) {
			console.warn("AbstractScheduleSelectedCardsCommand: cardIds is mandatory but is not set", data);
			return false;
		}
		if (data.boxId === undefined || data.boxId === null) {
			console.warn("AbstractScheduleSelectedCardsCommand: boxId is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		cardIds : data.cardIds,
		    		boxId : data.boxId
		    	};
				AppUtils.httpPost(
						`${AppUtils.settings.rootPath}/cards/schedule`, 
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
			if (data.outcomes.includes("noFilter")) {
				events.push(new Event('box.ScheduleSelectedCardsNoFilterEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadActiveCardsAction(), 
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



