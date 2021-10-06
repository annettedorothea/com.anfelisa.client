/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import MoveCardsStartedCommand from "../../../src/card/commands/MoveCardsStartedCommand";

export default class AbstractMoveCardsStartedAction extends Action {

    constructor(callback) {
        super('card.MoveCardsStartedAction', callback);
	}
		
	getCommand() {
		return new MoveCardsStartedCommand();
	}


}




/******* S.D.G. *******/



