/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import InitBoxesForDayDuringScoreAction from "../../../src/box/actions/InitBoxesForDayDuringScoreAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractScoreCardCommand extends AsynchronousCommand {
    constructor() {
        super("box.ScoreCardCommand");
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
	addShowToastOutcome(data) {
		data.outcomes.push("showToast");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		scheduledCardId : data.scheduledCardId,
	    		scoredCardQuality : data.scoredCardQuality
	    	};
			AppUtils.httpPost(
					`${AppUtils.settings.rootPath}/card/score`, 
					data.uuid, 
					true,
					 payload).then((response) => {
				data.intervalDifference = response.intervalDifference;
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('box.ScoreCardOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new InitBoxesForDayDuringScoreAction(), 
						data: {
						}
					}
				);
			}
			if (data.outcomes.includes("showToast")) {
				events.push(new Event('box.ScoreCardShowToastEvent'));
				actionsToBeTriggered.push(
					{
						action: new DisplayToastAction(), 
						data: {
							message: data.message, 
							error: data.error, 
							warning: data.warning
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



