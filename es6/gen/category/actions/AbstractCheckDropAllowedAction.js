/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CheckDropAllowedCommand from "../../../src/category/commands/CheckDropAllowedCommand";

export default class AbstractCheckDropAllowedAction extends Action {

    constructor() {
        super('category.CheckDropAllowedAction');
	}
		
	getCommand() {
		return new CheckDropAllowedCommand();
	}


}




/******* S.D.G. *******/



