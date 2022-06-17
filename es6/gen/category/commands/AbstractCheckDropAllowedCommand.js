	/********************************************************************************
	 * generated by de.acegen
	 ********************************************************************************/
	
	
	

	import SynchronousCommand from "../../ace/SynchronousCommand";
	import Event from "../../ace/Event";
	import * as AppUtils from "../../../src/AppUtils";
	import * as AppState from "../../../src/AppState";
	
	export default class AbstractCheckDropAllowedCommand extends SynchronousCommand {
	    constructor() {
	        super("category.CheckDropAllowedCommand");
	    }
	
	    initCommandData(data) {
	        data.rootCategory = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"]
	        )
	        ;
	        data.movedCategory = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "movedCategory"]
	        )
	        ;
	        data.movedCardIds = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "movedCardIds"]
	        )
	        ;
	        data.selectedCategory = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory"]
	        )
	        ;
	        data.outcomes = [];
	    }

		addOkOutcome(data) {
			data.outcomes.push("ok");
		}
		
		publishEvents(data) {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('category.CheckDropAllowedOkEvent'));
			}
			
			this.publish(events, data);
		  	AppState.stateUpdated();
			this.trigger(actionsToBeTriggered);
	
		}

	}
	
	
	
	/******* S.D.G. *******/
	
	
	
