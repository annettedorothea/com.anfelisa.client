/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SelectScheduleCardRangeCommand from "../../../src/card/commands/SelectScheduleCardRangeCommand";

export default class AbstractSelectScheduleCardRangeAction extends Action {

    constructor() {
        super('card.SelectScheduleCardRangeAction');
	}
		
	getCommand() {
		return new SelectScheduleCardRangeCommand();
	}


}




/******* S.D.G. *******/


