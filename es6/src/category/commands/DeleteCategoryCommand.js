/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        data.deleteCategoryDialog = {
            display: false,
        };
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



