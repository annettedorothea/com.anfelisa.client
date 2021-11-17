/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractSelectTreeItemCommand extends SynchronousCommand {
    constructor() {
        super("category.SelectTreeItemCommand");
    }

    initCommandData(data) {
        data.rootCategory = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"]
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
				events.push(new Event('category.SelectTreeItemOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new LoadCardsAction(), 
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



