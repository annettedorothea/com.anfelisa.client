/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplayVersionMismatchDialogCommand from "../../../src/common/commands/DisplayVersionMismatchDialogCommand";

export default class AbstractDisplayVersionMismatchDialogAction extends Action {

    constructor(callback) {
        super('common.DisplayVersionMismatchDialogAction', callback);
	}
		
	getCommand() {
		return new DisplayVersionMismatchDialogCommand();
	}


}




/******* S.D.G. *******/



