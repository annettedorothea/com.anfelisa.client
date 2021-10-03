/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/password/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor(callback) {
        super('password.PasswordChangedAction', callback);
	}
		
	getCommand() {
		return new PasswordChangedCommand();
	}


}




/******* S.D.G. *******/



