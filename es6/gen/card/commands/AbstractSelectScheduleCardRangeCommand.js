/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import ToggleScheduleCardSelectionAction from "../../../src/card/actions/ToggleScheduleCardSelectionAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractSelectScheduleCardRangeCommand extends SynchronousCommand {
    constructor() {
        super("card.SelectScheduleCardRangeCommand");
    }

    initCommandData(data) {
        data.selectedCardIds = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "selectedCardIds"]
        )
        ;
        data.cardList = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "cardList"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addNoSelectionOutcome(data) {
		data.outcomes.push("noSelection");
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('card.SelectScheduleCardRangeOkEvent'));
			}
			if (data.outcomes.includes("noSelection")) {
				events.push(new Event('card.SelectScheduleCardRangeNoSelectionEvent'));
				actionsToBeTriggered.push(
					{
						action: new ToggleScheduleCardSelectionAction(), 
						data: {
							cardId: data.cardId
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



