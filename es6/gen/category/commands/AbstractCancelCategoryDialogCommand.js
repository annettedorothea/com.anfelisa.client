	/********************************************************************************
	 * generated by de.acegen
	 ********************************************************************************/
	
	
	

	import SynchronousCommand from "../../ace/SynchronousCommand";
	import Event from "../../ace/Event";
	import * as AppUtils from "../../../src/AppUtils";
	import * as AppState from "../../../src/AppState";
	
	export default class AbstractCancelCategoryDialogCommand extends SynchronousCommand {
	    constructor() {
	        super("category.CancelCategoryDialogCommand");
	    }
	
	    initCommandData(data) {
	        data.outcomes = [];
	    }

		addOkOutcome(data) {
			data.outcomes.push("ok");
		}
		
		publishEvents(data) {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('category.CancelCategoryDialogOkEvent'));
			}
			
			this.publish(events, data);
		  	AppState.stateUpdated();
			this.trigger(actionsToBeTriggered);
	
		}

	}
	
	
	
	/******* S.D.G. *******/
	
	
	
