/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelVersionMismatchDialogCommand from "../../../src/common/commands/CancelVersionMismatchDialogCommand";

export default class AbstractCancelVersionMismatchDialogAction extends Action {

    constructor() {
        super({}, 'common.CancelVersionMismatchDialogAction');
	}
		
	getCommand() {
		return new CancelVersionMismatchDialogCommand(this.actionData);
	}


}




/******* S.D.G. *******/



