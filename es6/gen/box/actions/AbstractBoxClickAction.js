/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import BoxClickCommand from "../../../src/box/commands/BoxClickCommand";

export default class AbstractBoxClickAction extends Action {

    constructor() {
        super('box.BoxClickAction');
	}
		
	getCommand() {
		return new BoxClickCommand();
	}


}




/******* S.D.G. *******/


