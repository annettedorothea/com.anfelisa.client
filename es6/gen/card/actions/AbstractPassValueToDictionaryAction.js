/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PassValueToDictionaryCommand from "../../../src/card/commands/PassValueToDictionaryCommand";

export default class AbstractPassValueToDictionaryAction extends Action {

    constructor(callback) {
        super('card.PassValueToDictionaryAction', callback);
	}
		
	getCommand() {
		return new PassValueToDictionaryCommand();
	}


}




/******* S.D.G. *******/



