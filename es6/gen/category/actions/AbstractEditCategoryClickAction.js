/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import EditCategoryClickCommand from "../../../src/category/commands/EditCategoryClickCommand";

export default class AbstractEditCategoryClickAction extends Action {

    constructor(callback) {
        super('category.EditCategoryClickAction', callback);
	}
		
	getCommand() {
		return new EditCategoryClickCommand();
	}


}




/******* S.D.G. *******/



