/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import WantedLanguageChangedCommand from "../../../src/box/commands/WantedLanguageChangedCommand";

export default class AbstractWantedLanguageChangedAction extends Action {

    constructor(callback) {
        super('box.WantedLanguageChangedAction', callback);
	}
		
	getCommand() {
		return new WantedLanguageChangedCommand();
	}


}




/******* S.D.G. *******/



