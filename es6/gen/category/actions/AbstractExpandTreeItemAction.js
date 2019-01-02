import Action from "../../ace/SynchronousAction";
import ExpandTreeItemCommand from "../../../src/category/commands/ExpandTreeItemCommand";

export default class AbstractExpandTreeItemAction extends Action {

    constructor( categoryId) {
        super({categoryId}, 'category.ExpandTreeItemAction');
    }
    
	getCommand() {
		return new ExpandTreeItemCommand(this.actionData);
	}


}

/*       S.D.G.       */
