/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import LoginCommand from "../../../src/registration/commands/LoginCommand";

export default class AbstractLoginAction extends Action {

    constructor( password) {
        super({password}, 'registration.LoginAction');
	}
		
	getCommand() {
		return new LoginCommand(this.actionData);
	}


}




/******* S.D.G. *******/



