/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractNewCategoryClickCommand from "../../../gen/category/commands/AbstractNewCategoryClickCommand";

export default class NewCategoryClickCommand extends AbstractNewCategoryClickCommand {
    execute(data) {
        data.categoryDialog = {
            display: true,
            categoryName: "",
            newCategory: true
        };
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



