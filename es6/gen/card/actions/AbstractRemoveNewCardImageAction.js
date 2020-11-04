/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import RemoveNewCardImageCommand from "../../../src/card/commands/RemoveNewCardImageCommand";

export default class AbstractRemoveNewCardImageAction extends Action {

    constructor() {
        super({}, 'card.RemoveNewCardImageAction');
	}
		
	getCommand() {
		return new RemoveNewCardImageCommand(this.actionData);
	}


}




/******* S.D.G. *******/



