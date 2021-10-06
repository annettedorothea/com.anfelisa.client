/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import InvitedUsernameChangedCommand from "../../../src/category/commands/InvitedUsernameChangedCommand";

export default class AbstractInvitedUsernameChangedAction extends Action {

    constructor(callback) {
        super('category.InvitedUsernameChangedAction', callback);
	}
		
	getCommand() {
		return new InvitedUsernameChangedCommand();
	}


}




/******* S.D.G. *******/



