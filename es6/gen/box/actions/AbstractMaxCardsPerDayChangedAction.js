/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import MaxCardsPerDayChangedCommand from "../../../src/box/commands/MaxCardsPerDayChangedCommand";

export default class AbstractMaxCardsPerDayChangedAction extends Action {

    constructor(callback) {
        super('box.MaxCardsPerDayChangedAction', callback);
	}
		
	getCommand() {
		return new MaxCardsPerDayChangedCommand();
	}


}




/******* S.D.G. *******/



