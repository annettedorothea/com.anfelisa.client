import Action from "../../ace/SynchronousAction";
import ToggleDictionaryLookupOfEditedCategoryCommand from "../../../src/author/commands/ToggleDictionaryLookupOfEditedCategoryCommand";

export default class AbstractToggleDictionaryLookupOfEditedCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ToggleDictionaryLookupOfEditedCategoryAction');
    }

	getCommand() {
		return new ToggleDictionaryLookupOfEditedCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
