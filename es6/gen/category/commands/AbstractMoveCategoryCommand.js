/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractMoveCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("category.MoveCategoryCommand");
    }
    
    initCommandData(data) {
        data.rootCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "rootCategory", "categoryId"]
        );
        data.selectedCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "dropTargetCategoryId"]
        );
        data.targetCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "dropTargetCategoryId"]
        );
        data.movedCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "movedCategory", "categoryId"]
        );
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
			AppUtils.httpPut(`${AppUtils.settings.rootPath}/category/move`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.MoveCategoryOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new ReloadCategoryTreeAction(), 
					{
						selectedCategoryId: data.selectedCategoryId, 
						categoryIdToBeExpanded: data.categoryIdToBeExpanded
					}
			)
		}
    }

}



/******* S.D.G. *******/



