/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PassValueToDictionaryCommand from "../../../src/card/commands/PassValueToDictionaryCommand";

export default class AbstractPassValueToDictionaryAction extends Action {

    constructor() {
        super({}, 'card.PassValueToDictionaryAction');
	}
		
	getCommand() {
		return new PassValueToDictionaryCommand(this.actionData);
	}


}




/******* S.D.G. *******/



