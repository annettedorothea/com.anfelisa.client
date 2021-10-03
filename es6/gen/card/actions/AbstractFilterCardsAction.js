/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import FilterCardsCommand from "../../../src/card/commands/FilterCardsCommand";

export default class AbstractFilterCardsAction extends Action {

    constructor(callback) {
        super('card.FilterCardsAction', callback);
	}
		
	getCommand() {
		return new FilterCardsCommand();
	}


}




/******* S.D.G. *******/



