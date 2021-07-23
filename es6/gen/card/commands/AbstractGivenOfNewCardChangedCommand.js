/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import TriggerAction from "../../ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import SearchDuplicateCardsAction from "../../../src/card/actions/SearchDuplicateCardsAction";

export default class AbstractGivenOfNewCardChangedCommand extends SynchronousCommand {
    constructor() {
        super("card.GivenOfNewCardChangedCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('card.GivenOfNewCardChangedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publishWithDelayTakeLatest(
				new SearchDuplicateCardsAction(), 
					{
					},
				1000
			)
		}
    }
}




/******* S.D.G. *******/



