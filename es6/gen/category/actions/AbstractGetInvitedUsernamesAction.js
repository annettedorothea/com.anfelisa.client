/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import GetInvitedUsernamesCommand from "../../../src/category/commands/GetInvitedUsernamesCommand";

export default class AbstractGetInvitedUsernamesAction extends Action {

    constructor() {
        super('category.GetInvitedUsernamesAction');
	}
		
	getCommand() {
		return new GetInvitedUsernamesCommand();
	}


}




/******* S.D.G. *******/



