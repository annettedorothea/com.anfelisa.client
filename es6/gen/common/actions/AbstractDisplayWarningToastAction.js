/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplayWarningToastCommand from "../../../src/common/commands/DisplayWarningToastCommand";

export default class AbstractDisplayWarningToastAction extends Action {

    constructor() {
        super('common.DisplayWarningToastAction');
	}
		
	getCommand() {
		return new DisplayWarningToastCommand();
	}


}




/******* S.D.G. *******/



