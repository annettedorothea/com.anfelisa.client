/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import ExpandTreeItemOkEvent from "../../../gen/category/events/ExpandTreeItemOkEvent";

export default class AbstractExpandTreeItemCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.ExpandTreeItemCommand");
        this.ok = "ok";
        this.commandData.rootCategory = AppState.get_authorView_categoryTree_rootCategory();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ExpandTreeItemOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ExpandTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



