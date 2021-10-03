/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import SelectTreeItemAction from "../../../src/category/actions/SelectTreeItemAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractCollapseTreeItemCommand extends SynchronousCommand {
    constructor() {
        super("category.CollapseTreeItemCommand");
    }

    initCommandData(data) {
        data.rootCategory = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "rootCategory"], 
        	["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
        );
        data.selectedCategory = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "selectedCategory"], 
        	["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	addSelectParentCategoryOutcome(data) {
		data.outcomes.push("selectParentCategory");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.CollapseTreeItemOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("selectParentCategory")) {
			new Event('category.CollapseTreeItemSelectParentCategoryEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new SelectTreeItemAction(), 
					{
						categoryId: data.categoryId
					}
			)
		}
    }
}




/******* S.D.G. *******/



