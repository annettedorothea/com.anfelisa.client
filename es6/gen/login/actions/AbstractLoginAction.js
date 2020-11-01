/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import LoginCommand from "../../../src/login/commands/LoginCommand";

export default class AbstractLoginAction extends Action {

    constructor( password) {
        super({password}, 'login.LoginAction');
	}
		
	getCommand() {
		return new LoginCommand(this.actionData);
	}


}




/******* S.D.G. *******/



