/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/registration/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor() {
        super('registration.PasswordRepetitionChangedAction');
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand();
	}


}




/******* S.D.G. *******/



