/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SortCardOutCommand from "../../../src/box/commands/SortCardOutCommand";

export default class AbstractSortCardOutAction extends Action {

    constructor() {
        super('box.SortCardOutAction');
	}
		
	getCommand() {
		return new SortCardOutCommand();
	}


}




/******* S.D.G. *******/



