/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractEditCategoryClickCommand from "../../../gen/category/commands/AbstractEditCategoryClickCommand";

export default class EditCategoryClickCommand extends AbstractEditCategoryClickCommand {
    execute(data) {
        data.categoryDialog = {
            display: true,
            categoryName: data.categoryName,
            newCategory: false
        };
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



