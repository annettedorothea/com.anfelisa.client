/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import FilterCardsCommand from "../../../src/card/commands/FilterCardsCommand";

export default class AbstractFilterCardsAction extends Action {

    constructor( filter) {
        super({filter}, 'card.FilterCardsAction');
	}
		
	getCommand() {
		return new FilterCardsCommand(this.actionData);
	}


}




/******* S.D.G. *******/



