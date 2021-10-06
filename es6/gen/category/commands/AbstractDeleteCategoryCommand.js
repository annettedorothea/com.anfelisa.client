/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractDeleteCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("category.DeleteCategoryCommand");
    }
    
    initCommandData(data) {
        data.categoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory", "categoryId"]
        )
        ;
        data.selectedCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory", "parentCategoryId"]
        )
        ;
        data.rootCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "categoryId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
			AppUtils.httpDelete(`${AppUtils.settings.rootPath}/category/delete?categoryId=${data.categoryId}`, data.uuid, true).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.DeleteCategoryOkEvent').publish(data);
			AppState.stateUpdated();
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



