/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import GetInvitedUsernamesCommand from "../../../src/category/commands/GetInvitedUsernamesCommand";

export default class AbstractGetInvitedUsernamesAction extends Action {

    constructor(callback) {
        super('category.GetInvitedUsernamesAction', callback);
	}
		
	getCommand() {
		return new GetInvitedUsernamesCommand();
	}


}




/******* S.D.G. *******/



