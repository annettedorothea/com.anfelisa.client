	/********************************************************************************
	 * generated by de.acegen
	 ********************************************************************************/
	
	
	

	import SynchronousCommand from "../../ace/SynchronousCommand";
	import Event from "../../ace/Event";
	import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";
	import * as AppUtils from "../../../src/AppUtils";
	import * as AppState from "../../../src/AppState";
	
	export default class AbstractPriorityChangedCommand extends SynchronousCommand {
	    constructor() {
	        super("category.PriorityChangedCommand");
	    }
	
	    initCommandData(data) {
	        data.selectedCategoryId = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory", "categoryId"]
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
				events.push(new Event('category.PriorityChangedOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new ReloadCategoryTreeAction(), 
						data: {
							selectedCategoryId: data.selectedCategoryId, 
							categoryIdToBeExpanded: data.categoryIdToBeExpanded
						}
					}
				);
			}
			
			this.publish(events, data);
		  	AppState.stateUpdated();
			this.trigger(actionsToBeTriggered);
	
		}

	}
	
	
	
	/******* S.D.G. *******/
	
	
	
