/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SelectTreeItemCommand from "../../../src/category/commands/SelectTreeItemCommand";

export default class AbstractSelectTreeItemAction extends Action {

    constructor(callback) {
        super('category.SelectTreeItemAction', callback);
	}
		
	getCommand() {
		return new SelectTreeItemCommand();
	}


}




/******* S.D.G. *******/



