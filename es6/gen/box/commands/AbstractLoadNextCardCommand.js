/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractLoadNextCardCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadNextCardCommand");
    }
    
    initCommandData(data) {
        data.boxId = AppState.get(
        	["rootContainer", "mainView", "queryCardView", "boxId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addFinishedOutcome(data) {
		data.outcomes.push("finished");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(
					`${AppUtils.settings.rootPath}/box/next-card?${data.boxId ? `boxId=${data.boxId}` : ""}&${data.todayAtMidnightInUTC ? `todayAtMidnightInUTC=${data.todayAtMidnightInUTC}` : ""}`, 
					data.uuid, 
					true).then((response) => {
				data.nextCard = response.nextCard;
				data.allTodaysCards = response.allTodaysCards;
				data.openTodaysCards = response.openTodaysCards;
				data.reverse = response.reverse;
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
				events.push(new Event('box.LoadNextCardOkEvent'));
			}
			if (data.outcomes.includes("finished")) {
				events.push(new Event('box.LoadNextCardFinishedEvent'));
				actionsToBeTriggered.push(
					{
						action: new RouteAction(), 
						data: {
							hash: data.hash
						}
					}
				);
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



