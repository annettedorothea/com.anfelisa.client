/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import MoveCardsAction from "../../../src/card/actions/MoveCardsAction";
import MoveCategoryAction from "../../../src/category/actions/MoveCategoryAction";

export default class AbstractItemDroppedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.ItemDroppedCommand");
        this.commandData.outcomes = [];
        this.commandData.movedCategory = AppState.get_authorView_categoryTree_movedCategory();
    }

	addCardOutcome() {
		this.commandData.outcomes.push("card");
	}
	addCategoryOutcome() {
		this.commandData.outcomes.push("category");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("card")) {
			new TriggerAction(new MoveCardsAction()).publish();
		}
		if (this.commandData.outcomes.includes("category")) {
			new TriggerAction(new MoveCategoryAction()).publish();
		}
    }
}




/******* S.D.G. *******/



