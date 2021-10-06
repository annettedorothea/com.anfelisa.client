/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractMaxIntervalChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.MaxIntervalChangedCommand");
    }

    initCommandData(data) {
        data.maxCardsPerDay = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDay"]
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
			new Event('box.MaxIntervalChangedOkEvent').publish(data);
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



