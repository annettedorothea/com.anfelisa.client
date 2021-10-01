/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractLoadNextCardCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadNextCardCommand");
    }
    
    initCommandData(data) {
        data.boxId = AppUtils.get(
        	["rootContainer", "mainView", "boxId"]
        );
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
			AppUtils.httpGet(`${AppUtils.settings.rootPath}/box/next-card?boxId=${data.boxId}&todayAtMidnightInUTC=${data.todayAtMidnightInUTC}`, data.uuid, true).then((response) => {
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
		if (data.outcomes.includes("ok")) {
			new Event('box.LoadNextCardOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("finished")) {
			new TriggerAction().publish(
				new RouteAction(), 
					{
						hash: data.hash
					}
			)
			new TriggerAction().publish(
				new DisplayToastAction(), 
					{
						message: data.message, 
						error: data.error
					}
			)
		}
    }

}



/******* S.D.G. *******/



