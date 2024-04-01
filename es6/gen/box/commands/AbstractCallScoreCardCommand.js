/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";
import DisplayWarningToastAction from "../../../src/common/actions/DisplayWarningToastAction";

export default class AbstractCallScoreCardCommand extends AsynchronousCommand {
    constructor() {
        super("box.CallScoreCardCommand");
    }
    
    initCommandData(data) {
        data.scheduledCardId = AppState.get(
        	["rootContainer", "mainView", "queryCardView", "nextCard", "scheduledCardId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addShowInfoToastOutcome(data) {
		data.outcomes.push("showInfoToast");
	}
	addShowWarningToastOutcome(data) {
		data.outcomes.push("showWarningToast");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.scheduledCardId === undefined || data.scheduledCardId === null) {
			console.warn("AbstractCallScoreCardCommand: scheduledCardId is mandatory but is not set", data);
			return false;
		}
		if (data.scoredCardQuality === undefined || data.scoredCardQuality === null) {
			console.warn("AbstractCallScoreCardCommand: scoredCardQuality is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		scheduledCardId : data.scheduledCardId,
		    		scoredCardQuality : data.scoredCardQuality
		    	};
				AppUtils.httpPost(
						`${AppUtils.settings.rootPath}/card/score`, 
						data.uuid, 
						true,
						 payload)
					.then((response) => {
						data.intervalDifference = response.intervalDifference;
						data.maxCardsPerDay = response.maxCardsPerDay;
						data.maxInterval = response.maxInterval;
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
				events.push(new Event('box.CallScoreCardOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadNextCardAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("showInfoToast")) {
				events.push(new Event('box.CallScoreCardShowInfoToastEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayToastAction(), 
						data: {
							textKey: data.textKey, 
							args: data.args
						}
					}
				);
			}
			if (data.outcomes.includes("showWarningToast")) {
				events.push(new Event('box.CallScoreCardShowWarningToastEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayWarningToastAction(), 
						data: {
							textKey: data.textKey, 
							args: data.args
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



