/********************************************************************************
 * generated by de.acegen 1.5.4
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



