/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import TooManyCardsStatusCommand from "../../../src/box/commands/TooManyCardsStatusCommand";

export default class AbstractTooManyCardsStatusAction extends Action {

    constructor() {
        super({}, 'box.TooManyCardsStatusAction');
	}
		
	getCommand() {
		return new TooManyCardsStatusCommand(this.actionData);
	}


}




/******* S.D.G. *******/



