/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import WantedLanguageChangedCommand from "../../../src/box/commands/WantedLanguageChangedCommand";

export default class AbstractWantedLanguageChangedAction extends Action {

    constructor( wantedLanguage) {
        super({wantedLanguage}, 'box.WantedLanguageChangedAction');
	}
		
	getCommand() {
		return new WantedLanguageChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



