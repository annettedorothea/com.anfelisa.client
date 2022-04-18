/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractMoveCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("category.MoveCategoryCommand");
    }
    
    initCommandData(data) {
        data.rootCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "categoryId"]
        )
        ;
        data.selectedCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
        )
        ;
        data.targetCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
        )
        ;
        data.movedCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "movedCategory", "categoryId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		movedCategoryId : data.movedCategoryId,
	    		targetCategoryId : data.targetCategoryId
	    	};
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/category/move`, 
					data.uuid, 
					true,
					 payload)
				.then(() => {
					this.handleResponse(data, resolve, reject);
				}, (error) => {
					data.error = error;
					this.handleError(data, resolve, reject);
				})
				.catch(x => reject(x));
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('category.MoveCategoryOkEvent'));
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
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



