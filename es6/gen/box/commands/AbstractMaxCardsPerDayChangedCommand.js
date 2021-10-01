/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractMaxCardsPerDayChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.MaxCardsPerDayChangedCommand");
    }

    initCommandData(data) {
        data.maxInterval = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "maxInterval"]
        );
        data.allActiveCards = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "allActiveCards"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.MaxCardsPerDayChangedOkEvent').publish(data);
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



