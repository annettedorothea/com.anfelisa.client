/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractLoadBoxStatisticsCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadBoxStatisticsCommand");
    }
    
    initCommandData(data) {
        data.dashboardView = AppUtils.get(["rootContainer", ["mainView", "dashboardView"]]);
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
			AppUtils.stateUpdated(AppState.getAppState());
		}
    }

}



/******* S.D.G. *******/



