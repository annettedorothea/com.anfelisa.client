/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/password/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor( passwordRepetition) {
        super({passwordRepetition}, 'password.PasswordRepetitionChangedAction');
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



