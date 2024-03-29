/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractChangeOrderCategoryCommand from "../../../gen/category/commands/AbstractChangeOrderCategoryCommand";

export default class ChangeOrderCategoryCommand extends AbstractChangeOrderCategoryCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        data.movedCategory = null;
        data.dropAllowed = null;
        data.dropTargetCategoryId = null;
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



