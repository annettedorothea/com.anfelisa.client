/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplayVersionMismatchErrorDialogCommand from "../../../src/common/commands/DisplayVersionMismatchErrorDialogCommand";

export default class AbstractDisplayVersionMismatchErrorDialogAction extends Action {

    constructor(callback) {
        super('common.DisplayVersionMismatchErrorDialogAction', callback);
	}
		
	getCommand() {
		return new DisplayVersionMismatchErrorDialogCommand();
	}


}




/******* S.D.G. *******/



