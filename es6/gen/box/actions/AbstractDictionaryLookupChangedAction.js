/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DictionaryLookupChangedCommand from "../../../src/box/commands/DictionaryLookupChangedCommand";

export default class AbstractDictionaryLookupChangedAction extends Action {

    constructor() {
        super({}, 'box.DictionaryLookupChangedAction');
	}
		
	getCommand() {
		return new DictionaryLookupChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



