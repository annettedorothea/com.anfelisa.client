/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PriorityChangedCommand from "../../../src/category/commands/PriorityChangedCommand";

export default class AbstractPriorityChangedAction extends Action {

    constructor(callback) {
        super('category.PriorityChangedAction', callback);
	}
		
	getCommand() {
		return new PriorityChangedCommand();
	}


}




/******* S.D.G. *******/



