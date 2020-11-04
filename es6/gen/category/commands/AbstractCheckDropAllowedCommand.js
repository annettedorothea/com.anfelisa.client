/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import CheckDropAllowedOkEvent from "../../../gen/category/events/CheckDropAllowedOkEvent";

export default class AbstractCheckDropAllowedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CheckDropAllowedCommand");
        this.ok = "ok";
        this.commandData.rootCategory = AppState.get_authorView_categoryTree_rootCategory();
        this.commandData.movedCategory = AppState.get_authorView_categoryTree_movedCategory();
        this.commandData.selectedCategory = AppState.get_authorView_categoryTree_selectedCategory();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CheckDropAllowedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CheckDropAllowedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



