/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/box/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor(callback) {
        super('box.ToggleAllScheduleCardSelectionAction', callback);
	}
		
	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand();
	}


}




/******* S.D.G. *******/



