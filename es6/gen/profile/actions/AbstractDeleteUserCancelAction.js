/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DeleteUserCancelCommand from "../../../src/profile/commands/DeleteUserCancelCommand";

export default class AbstractDeleteUserCancelAction extends Action {

    constructor() {
        super({}, 'profile.DeleteUserCancelAction');
	}
		
	getCommand() {
		return new DeleteUserCancelCommand(this.actionData);
	}


}




/******* S.D.G. *******/



