/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import RootCategoryNameChangedCommand from "../../../src/box/commands/RootCategoryNameChangedCommand";

export default class AbstractRootCategoryNameChangedAction extends Action {

    constructor() {
        super('box.RootCategoryNameChangedAction');
	}
		
	getCommand() {
		return new RootCategoryNameChangedCommand();
	}


}




/******* S.D.G. *******/



