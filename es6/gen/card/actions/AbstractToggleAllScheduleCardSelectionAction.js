/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/card/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor(callback) {
        super('card.ToggleAllScheduleCardSelectionAction', callback);
	}
		
	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand();
	}


}




/******* S.D.G. *******/



