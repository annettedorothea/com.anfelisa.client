/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoadCategoryTreeCommand from "../../../gen/category/commands/AbstractLoadCategoryTreeCommand";
import {findExpandedCategories, initExpandedState, initSelected} from "../utils/CategoryTreeUtils";

export default class LoadCategoryTreeCommand extends AbstractLoadCategoryTreeCommand {

    validateCommandData(data) {
        if (!data.rootCategoryId) {
            return false;
        }
        data.filterNonScheduled = false;
        data.priority = null;
    	return true;
    }

    handleResponse(data, resolve) {
        const expandedCategories = [];
        if (data.rootCategory) {
            findExpandedCategories(data.rootCategory, expandedCategories);
        }
        initExpandedState(data.rootCategory, expandedCategories);

        data.categoryTree = {
            selectedCategory: initSelected(data.rootCategory, data.selectedCategoryId),
            rootCategory: data.rootCategory,
            displayDeleteCategory: false,
            displayEditCategory: false,
            displayNewCategory: false,
            displayInviteUser: false,
            reverseBoxExists: data.reverseBoxExists,
            filterNonScheduled: false,
            priority: null
        };
        data.cardView = {
            cardList: null,
            naturalInputOrder: data.reverse === false
        };
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/
