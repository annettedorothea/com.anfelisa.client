/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractLoadBoxStatisticsCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadBoxStatisticsCommand");
    }
    
    initCommandData(data) {
        data.boxList = AppUtils.get(
        	["rootContainer", "mainView", "boxList"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(`${AppUtils.settings.rootPath}/boxes/statistics/?todayAtMidnightInUTC=${data.todayAtMidnightInUTC}`, data.uuid, true).then((response) => {
				data.boxStatisticsList = response.boxStatisticsList;
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.LoadBoxStatisticsOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }

}



/******* S.D.G. *******/



