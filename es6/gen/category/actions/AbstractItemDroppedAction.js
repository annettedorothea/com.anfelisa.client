/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ItemDroppedCommand from "../../../src/category/commands/ItemDroppedCommand";

export default class AbstractItemDroppedAction extends Action {

    constructor( alt) {
        super({alt}, 'category.ItemDroppedAction');
	}
		
	getCommand() {
		return new ItemDroppedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



