import Action from "../../ace/SynchronousAction";
import EditCategoryCommand from "../../../src/author/commands/EditCategoryCommand";

export default class AbstractEditCategoryAction extends Action {

    constructor() {
        super({}, 'author.EditCategoryAction');
    }

	getCommand() {
		return new EditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
