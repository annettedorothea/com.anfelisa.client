/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractSelectTreeItemCommand from "../../../gen/category/commands/AbstractSelectTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class SelectTreeItemCommand extends AbstractSelectTreeItemCommand {
    execute(data) {
        if (data.rootCategory.categoryId === data.categoryId) {
            data.selectedCategory = data.rootCategory;
            data.hash = `#categories/${data.categoryId}`;
        } else {
            data.selectedCategory = findCategory(data.rootCategory.childCategories, data.categoryId);
            data.hash = `#categories/${data.selectedCategory.rootCategoryId}/${data.categoryId}`;
        }
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



