/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/app/AppUtils";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractCreateCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("category.CreateCategoryCommand");
    }
    
    initCommandData(data) {
        data.categoryName = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "categoryDialog", "categoryName"]
        );
        data.parentCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "selectedCategory", "categoryId"]
        );
        data.rootCategoryId = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "rootCategory", "categoryId"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryName : data.categoryName,
	    		parentCategoryId : data.parentCategoryId
	    	};
			AppUtils.httpPost(`${AppUtils.settings.rootPath}/category/create`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.CreateCategoryOkEvent').publish(data);
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



