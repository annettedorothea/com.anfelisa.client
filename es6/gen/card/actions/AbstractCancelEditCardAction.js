/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelEditCardCommand from "../../../src/card/commands/CancelEditCardCommand";

export default class AbstractCancelEditCardAction extends Action {

    constructor() {
        super('card.CancelEditCardAction');
	}
		
	getCommand() {
		return new CancelEditCardCommand();
	}


}




/******* S.D.G. *******/



