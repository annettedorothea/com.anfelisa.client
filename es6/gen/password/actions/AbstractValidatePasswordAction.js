/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ValidatePasswordCommand from "../../../src/password/commands/ValidatePasswordCommand";

export default class AbstractValidatePasswordAction extends Action {

    constructor() {
        super('password.ValidatePasswordAction');
	}
		
	getCommand() {
		return new ValidatePasswordCommand();
	}


}




/******* S.D.G. *******/


