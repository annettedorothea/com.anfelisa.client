/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/password/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor() {
        super('password.PasswordRepetitionChangedAction');
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand();
	}


}




/******* S.D.G. *******/



