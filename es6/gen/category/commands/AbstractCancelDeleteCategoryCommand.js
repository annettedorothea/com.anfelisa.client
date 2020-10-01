/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelDeleteCategoryOkEvent from "../../../gen/category/events/CancelDeleteCategoryOkEvent";

export default class AbstractCancelDeleteCategoryCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CancelDeleteCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelDeleteCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelDeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



