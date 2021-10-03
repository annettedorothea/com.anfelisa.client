/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelNewCardCommand from "../../../src/card/commands/CancelNewCardCommand";

export default class AbstractCancelNewCardAction extends Action {

    constructor(callback) {
        super('card.CancelNewCardAction', callback);
	}
		
	getCommand() {
		return new CancelNewCardCommand();
	}


}




/******* S.D.G. *******/



