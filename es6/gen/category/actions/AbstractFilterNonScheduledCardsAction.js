/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import FilterNonScheduledCardsCommand from "../../../src/category/commands/FilterNonScheduledCardsCommand";

export default class AbstractFilterNonScheduledCardsAction extends Action {

    constructor(callback) {
        super('category.FilterNonScheduledCardsAction', callback);
	}
		
	getCommand() {
		return new FilterNonScheduledCardsCommand();
	}


}




/******* S.D.G. *******/



