/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractExpandTreeItemCommand extends SynchronousCommand {
    constructor() {
        super("category.ExpandTreeItemCommand");
    }

    initCommandData(data) {
        data.rootCategory = AppUtils.get(
        	["rootContainer", "mainView", "categoryTree", "rootCategory"], 
        	["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.ExpandTreeItemOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



