/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import GivenOfEditedCardChangedCommand from "../../../src/card/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor(callback) {
        super('card.GivenOfEditedCardChangedAction', callback);
	}
		
	getCommand() {
		return new GivenOfEditedCardChangedCommand();
	}


}




/******* S.D.G. *******/



