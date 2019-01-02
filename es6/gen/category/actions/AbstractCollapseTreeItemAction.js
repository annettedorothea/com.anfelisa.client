import Action from "../../ace/SynchronousAction";
import CollapseTreeItemCommand from "../../../src/category/commands/CollapseTreeItemCommand";

export default class AbstractCollapseTreeItemAction extends Action {

    constructor( categoryId) {
        super({categoryId}, 'category.CollapseTreeItemAction');
    }
    
	getCommand() {
		return new CollapseTreeItemCommand(this.actionData);
	}


}

/*       S.D.G.       */
