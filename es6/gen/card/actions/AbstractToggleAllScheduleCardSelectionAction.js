/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/card/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor() {
        super('card.ToggleAllScheduleCardSelectionAction');
	}
		
	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand();
	}


}




/******* S.D.G. *******/



