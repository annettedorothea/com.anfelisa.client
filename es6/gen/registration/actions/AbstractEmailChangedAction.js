/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import EmailChangedCommand from "../../../src/registration/commands/EmailChangedCommand";

export default class AbstractEmailChangedAction extends Action {

    constructor(callback) {
        super('registration.EmailChangedAction', callback);
	}
		
	getCommand() {
		return new EmailChangedCommand();
	}


}




/******* S.D.G. *******/



