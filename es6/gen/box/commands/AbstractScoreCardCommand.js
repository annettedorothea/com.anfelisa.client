/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import InitBoxesForDayDuringScoreAction from "../../../src/box/actions/InitBoxesForDayDuringScoreAction";

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
					 payload).then(() => {
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
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}


}



/******* S.D.G. *******/



