/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelCategoryDialogCommand from "../../../src/category/commands/CancelCategoryDialogCommand";

export default class AbstractCancelCategoryDialogAction extends Action {

    constructor(callback) {
        super('category.CancelCategoryDialogAction', callback);
	}
		
	getCommand() {
		return new CancelCategoryDialogCommand();
	}


}




/******* S.D.G. *******/



