/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelSaveBugDialogCommand from "../../../src/common/commands/CancelSaveBugDialogCommand";

export default class AbstractCancelSaveBugDialogAction extends Action {

    constructor() {
        super({}, 'common.CancelSaveBugDialogAction');
	}
		
	getCommand() {
		return new CancelSaveBugDialogCommand(this.actionData);
	}


}




/******* S.D.G. *******/



