/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelDeleteCategoryCommand from "../../../src/category/commands/CancelDeleteCategoryCommand";

export default class AbstractCancelDeleteCategoryAction extends Action {

    constructor() {
        super('category.CancelDeleteCategoryAction');
	}
		
	getCommand() {
		return new CancelDeleteCategoryCommand();
	}


}




/******* S.D.G. *******/



