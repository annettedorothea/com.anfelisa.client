/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import GivenLanguageChangedCommand from "../../../src/box/commands/GivenLanguageChangedCommand";

export default class AbstractGivenLanguageChangedAction extends Action {

    constructor( givenLanguage) {
        super({givenLanguage}, 'box.GivenLanguageChangedAction');
	}
		
	getCommand() {
		return new GivenLanguageChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



