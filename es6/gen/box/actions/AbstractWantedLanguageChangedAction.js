/********************************************************************************
 * generated by de.acegen 0.9.10
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



