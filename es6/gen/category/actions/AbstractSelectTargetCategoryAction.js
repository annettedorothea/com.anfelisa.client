/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SelectTargetCategoryCommand from "../../../src/category/commands/SelectTargetCategoryCommand";

export default class AbstractSelectTargetCategoryAction extends Action {

    constructor() {
        super('category.SelectTargetCategoryAction');
	}
		
	getCommand() {
		return new SelectTargetCategoryCommand();
	}


}




/******* S.D.G. *******/



