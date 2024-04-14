	/********************************************************************************
	 * generated by de.acegen
	 ********************************************************************************/
	
	
	

	import SynchronousCommand from "../../ace/SynchronousCommand";
	import Event from "../../ace/Event";
	import SelectTargetCategoryAction from "../../../src/category/actions/SelectTargetCategoryAction";
	import * as AppUtils from "../../../src/AppUtils";
	import * as AppState from "../../../src/AppState";
	
	export default class AbstractCollapseTreeItemInMoveDialogCommand extends SynchronousCommand {
	    constructor() {
	        super("category.CollapseTreeItemInMoveDialogCommand");
	    }
	
	    initCommandData(data) {
	        data.rootCategoryInMoveDialog = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "moveCategory", "rootCategoryInMoveDialog"]
	        )
	        ;
	        data.selectedCategory = AppState.get(
	        	["rootContainer", "mainView", "authorView", "categoryTree", "moveCategory", "rootCategoryInMoveDialog", "selectedCategory"]
	        )
	        ;
	        data.outcomes = [];
	    }

		addOkOutcome(data) {
			data.outcomes.push("ok");
		}
		addSelectParentCategoryOutcome(data) {
			data.outcomes.push("selectParentCategory");
		}
		
		publishEvents(data) {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('category.CollapseTreeItemInMoveDialogOkEvent'));
			}
			if (data.outcomes.includes("selectParentCategory")) {
				events.push(new Event('category.CollapseTreeItemInMoveDialogSelectParentCategoryEvent'));
				actionsToBeTriggered.push(
					{
						action: new SelectTargetCategoryAction(), 
						data: {
							categoryId: data.categoryId
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
	
	
	