/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CheckDropAllowedCommand from "../../../src/category/commands/CheckDropAllowedCommand";

export default class AbstractCheckDropAllowedAction extends Action {

    constructor( categoryId, altKey, depth) {
        super({categoryId, altKey, depth}, 'category.CheckDropAllowedAction');
	}
		
	getCommand() {
		return new CheckDropAllowedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



