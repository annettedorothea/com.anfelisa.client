/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import GivenOfEditedCardChangedCommand from "../../../src/card/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor() {
        super('card.GivenOfEditedCardChangedAction');
	}
		
	getCommand() {
		return new GivenOfEditedCardChangedCommand();
	}


}




/******* S.D.G. *******/



