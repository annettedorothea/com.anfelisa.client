/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DictionaryLookupChangedCommand from "../../../src/box/commands/DictionaryLookupChangedCommand";

export default class AbstractDictionaryLookupChangedAction extends Action {

    constructor() {
        super('box.DictionaryLookupChangedAction');
	}
		
	getCommand() {
		return new DictionaryLookupChangedCommand();
	}


}




/******* S.D.G. *******/



