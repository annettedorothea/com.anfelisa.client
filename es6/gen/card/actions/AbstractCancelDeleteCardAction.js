/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelDeleteCardCommand from "../../../src/card/commands/CancelDeleteCardCommand";

export default class AbstractCancelDeleteCardAction extends Action {

    constructor() {
        super({}, 'card.CancelDeleteCardAction');
	}
		
	getCommand() {
		return new CancelDeleteCardCommand(this.actionData);
	}


}




/******* S.D.G. *******/



