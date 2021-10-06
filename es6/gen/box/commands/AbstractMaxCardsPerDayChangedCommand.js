/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractMaxCardsPerDayChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.MaxCardsPerDayChangedCommand");
    }

    initCommandData(data) {
        data.maxInterval = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxInterval"]
        )
        ;
        data.allActiveCards = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "allActiveCards"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.MaxCardsPerDayChangedOkEvent').publish(data);
			AppState.stateUpdated();
			new TriggerAction().publish(
				new TooManyCardsStatusAction(), 
					{
					}
			)
		}
    }
}




/******* S.D.G. *******/



