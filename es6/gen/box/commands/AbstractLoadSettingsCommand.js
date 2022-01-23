/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";

export default class AbstractLoadSettingsCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadSettingsCommand");
    }
    
    initCommandData(data) {
        data.boxId = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(
					`${AppUtils.settings.rootPath}/box/settings/${data.boxId}`, 
					data.uuid, 
					true).then((response) => {
				data.boxSettings = response.boxSettings;
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
				events.push(new Event('box.LoadSettingsOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new TooManyCardsStatusAction(), 
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



