/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/login/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor() {
        super('login.PasswordChangedAction');
	}
		
	getCommand() {
		return new PasswordChangedCommand();
	}


}




/******* S.D.G. *******/



