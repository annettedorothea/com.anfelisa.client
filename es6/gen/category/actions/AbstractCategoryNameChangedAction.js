/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CategoryNameChangedCommand from "../../../src/category/commands/CategoryNameChangedCommand";

export default class AbstractCategoryNameChangedAction extends Action {

    constructor() {
        super('category.CategoryNameChangedAction');
	}
		
	getCommand() {
		return new CategoryNameChangedCommand();
	}


}




/******* S.D.G. *******/



