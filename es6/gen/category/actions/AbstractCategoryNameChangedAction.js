/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CategoryNameChangedCommand from "../../../src/category/commands/CategoryNameChangedCommand";

export default class AbstractCategoryNameChangedAction extends Action {

    constructor(callback) {
        super('category.CategoryNameChangedAction', callback);
	}
		
	getCommand() {
		return new CategoryNameChangedCommand();
	}


}




/******* S.D.G. *******/



