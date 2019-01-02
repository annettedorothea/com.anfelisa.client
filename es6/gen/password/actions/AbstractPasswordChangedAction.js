import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/password/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor( password, passwordRepetition) {
        super({password, passwordRepetition}, 'password.PasswordChangedAction');
    }
    
	getCommand() {
		return new PasswordChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
