/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleSaveInLocalStorageCommand from "../../../src/login/commands/ToggleSaveInLocalStorageCommand";

export default class AbstractToggleSaveInLocalStorageAction extends Action {

    constructor(callback) {
        super('login.ToggleSaveInLocalStorageAction', callback);
	}
		
	getCommand() {
		return new ToggleSaveInLocalStorageCommand();
	}


}




/******* S.D.G. *******/



