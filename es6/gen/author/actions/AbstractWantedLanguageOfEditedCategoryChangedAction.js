import Action from "../../ace/SynchronousAction";
import WantedLanguageOfEditedCategoryChangedCommand from "../../../src/author/commands/WantedLanguageOfEditedCategoryChangedCommand";

export default class AbstractWantedLanguageOfEditedCategoryChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.WantedLanguageOfEditedCategoryChangedAction', false);
    }

	getCommand() {
		return new WantedLanguageOfEditedCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
