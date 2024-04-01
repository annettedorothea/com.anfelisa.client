/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractCallScoreReinforceCardCommand extends AsynchronousCommand {
    constructor() {
        super("box.CallScoreReinforceCardCommand");
    }
    
    initCommandData(data) {
        data.reinforceCardId = AppState.get(
        	["rootContainer", "mainView", "queryCardView", "nextCard", "reinforceCardId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.reinforceCardId === undefined || data.reinforceCardId === null) {
			console.warn("AbstractCallScoreReinforceCardCommand: reinforceCardId is mandatory but is not set", data);
			return false;
		}
		if (data.keep === undefined || data.keep === null) {
			console.warn("AbstractCallScoreReinforceCardCommand: keep is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		reinforceCardId : data.reinforceCardId,
		    		keep : data.keep
		    	};
				AppUtils.httpPost(
						`${AppUtils.settings.rootPath}/card/score-reinforce`, 
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
				events.push(new Event('box.CallScoreReinforceCardOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadNextCardAction(), 
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



