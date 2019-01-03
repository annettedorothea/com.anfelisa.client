import Action from "../../ace/SynchronousAction";
import EditCategoryClickCommand from "../../../src/category/commands/EditCategoryClickCommand";

export default class AbstractEditCategoryClickAction extends Action {

    constructor() {
        super({}, 'category.EditCategoryClickAction');
    }
    
	getCommand() {
		return new EditCategoryClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
