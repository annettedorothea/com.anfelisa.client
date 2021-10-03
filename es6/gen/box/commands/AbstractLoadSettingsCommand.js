/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";

export default class AbstractLoadSettingsCommand extends AsynchronousCommand {
    constructor() {
        super("box.LoadSettingsCommand");
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

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpGet(`${AppUtils.settings.rootPath}/box/settings/${data.boxId}`, data.uuid, true).then((response) => {
				data.boxSettings = response.boxSettings;
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.LoadSettingsOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new TooManyCardsStatusAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



