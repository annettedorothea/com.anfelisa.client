/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CollapseTreeItemCommand from "../../../src/card/commands/CollapseTreeItemCommand";

export default class AbstractCollapseTreeItemAction extends Action {

    constructor() {
        super('card.CollapseTreeItemAction');
	}
		
	getCommand() {
		return new CollapseTreeItemCommand();
	}


}




/******* S.D.G. *******/


