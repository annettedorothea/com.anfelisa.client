/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplaySaveBugDialogCommand from "../../../src/common/commands/DisplaySaveBugDialogCommand";

export default class AbstractDisplaySaveBugDialogAction extends Action {

    constructor() {
        super({}, 'common.DisplaySaveBugDialogAction');
	}
		
	getCommand() {
		return new DisplaySaveBugDialogCommand(this.actionData);
	}


}




/******* S.D.G. *******/



