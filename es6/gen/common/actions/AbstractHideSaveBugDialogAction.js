/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import HideSaveBugDialogCommand from "../../../src/common/commands/HideSaveBugDialogCommand";

export default class AbstractHideSaveBugDialogAction extends Action {

    constructor(callback) {
        super('common.HideSaveBugDialogAction', callback);
	}
		
	getCommand() {
		return new HideSaveBugDialogCommand();
	}


}




/******* S.D.G. *******/



