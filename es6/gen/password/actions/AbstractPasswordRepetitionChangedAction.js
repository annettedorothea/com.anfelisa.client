/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/password/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor(callback) {
        super('password.PasswordRepetitionChangedAction', callback);
	}
		
	getCommand() {
		return new PasswordRepetitionChangedCommand();
	}


}




/******* S.D.G. *******/



