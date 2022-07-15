/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";

export default class AbstractLoadBoxesCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadBoxesCommand");
    }
    
    initCommandData(data) {
        data.previousBoxList = AppState.get(
        	["rootContainer", "mainView", "dashboardView", "boxList"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.todayAtMidnightInUTC === undefined || data.todayAtMidnightInUTC === null) {
			console.warn("AbstractLoadBoxesCommand: todayAtMidnightInUTC is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
				AppUtils.httpGet(
						`${AppUtils.settings.rootPath}/boxes/my/?${data.todayAtMidnightInUTC ? `todayAtMidnightInUTC=${data.todayAtMidnightInUTC}` : ""}`, 
						data.uuid, 
						true)
					.then((response) => {
						data.boxList = response.boxList;
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
				events.push(new Event('box.LoadBoxesOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadBoxStatisticsAction(), 
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



