/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleInputOrderCommand from "../../../src/card/commands/ToggleInputOrderCommand";

export default class AbstractToggleInputOrderAction extends Action {

    constructor() {
        super({}, 'card.ToggleInputOrderAction');
	}
		
	getCommand() {
		return new ToggleInputOrderCommand(this.actionData);
	}


}




/******* S.D.G. *******/



