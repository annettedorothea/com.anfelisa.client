/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import PriorityChangedOkEvent from "../../../gen/category/events/PriorityChangedOkEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractPriorityChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.PriorityChangedCommand");
        this.ok = "ok";
        this.commandData.filterNonScheduled = AppState.get_authorView_filterNonScheduled();
        this.commandData.actualPriority = AppState.get_authorView_priority();
        this.commandData.selectedCategory = AppState.get_authorView_categoryTree_selectedCategory();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PriorityChangedOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish();
			break;
		default:
			throw 'PriorityChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/


