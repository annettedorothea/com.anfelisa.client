/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DisplayWantedCommand from "../../../src/box/commands/DisplayWantedCommand";

export default class AbstractDisplayWantedAction extends Action {

    constructor() {
        super('box.DisplayWantedAction');
	}
		
	getCommand() {
		return new DisplayWantedCommand();
	}


}




/******* S.D.G. *******/



