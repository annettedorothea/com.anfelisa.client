/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/registration/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor( passwordRepetition) {
        super({passwordRepetition}, 'registration.PasswordRepetitionChangedAction');
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



