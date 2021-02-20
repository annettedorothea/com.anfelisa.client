/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplayVersionMismatchDialogCommand from "../../../src/common/commands/DisplayVersionMismatchDialogCommand";

export default class AbstractDisplayVersionMismatchDialogAction extends Action {

    constructor() {
        super({}, 'common.DisplayVersionMismatchDialogAction');
	}
		
	getCommand() {
		return new DisplayVersionMismatchDialogCommand(this.actionData);
	}


}




/******* S.D.G. *******/


