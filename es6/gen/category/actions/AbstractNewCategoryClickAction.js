/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import NewCategoryClickCommand from "../../../src/category/commands/NewCategoryClickCommand";

export default class AbstractNewCategoryClickAction extends Action {

    constructor() {
        super('category.NewCategoryClickAction');
	}
		
	getCommand() {
		return new NewCategoryClickCommand();
	}


}




/******* S.D.G. *******/



