/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDeleteCategoryClickCommand from "../../../gen/category/commands/AbstractDeleteCategoryClickCommand";

export default class DeleteCategoryClickCommand extends AbstractDeleteCategoryClickCommand {
    execute(data) {
        data.deleteCategoryDialog = {
            display: true,
        };
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



