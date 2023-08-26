/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractMoveCategoryCommand from "../../../gen/category/commands/AbstractMoveCategoryCommand";

export default class MoveCategoryCommand extends AbstractMoveCategoryCommand {

    validateCommandData(data) {
        data.targetCategoryId = data.selectedCategory.categoryId;
    	return true;
    }

    handleResponse(data, resolve) {
        data.selectedCategoryId = data.targetCategoryId;
        data.categoryIdToBeExpanded = data.targetCategoryId;
        data.moveCategory = {
            display: false,
            rootCategoryInMoveDialog: null,
        };
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



