/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelVersionMismatchDialogCommand from "../../../src/common/commands/CancelVersionMismatchDialogCommand";

export default class AbstractCancelVersionMismatchDialogAction extends Action {

    constructor(callback) {
        super('common.CancelVersionMismatchDialogAction', callback);
	}
		
	getCommand() {
		return new CancelVersionMismatchDialogCommand();
	}


}




/******* S.D.G. *******/



