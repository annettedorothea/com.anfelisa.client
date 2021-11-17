/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractPassValueToDictionaryCommand extends SynchronousCommand {
    constructor() {
        super("card.PassValueToDictionaryCommand");
    }

    initCommandData(data) {
        data.naturalInputOrder = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "naturalInputOrder"]
        )
        ;
        data.given = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "newCard", "given"]
        )
        ;
        data.wanted = AppState.get(
        	["rootContainer", "mainView", "authorView", "cardView", "newCard", "wanted"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('card.PassValueToDictionaryOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}




/******* S.D.G. *******/



