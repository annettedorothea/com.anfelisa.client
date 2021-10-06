/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/registration/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor(callback) {
        super('registration.PasswordRepetitionChangedAction', callback);
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand();
	}


}




/******* S.D.G. *******/



