/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CategoryNameChangedOkEvent from "../../../gen/category/events/CategoryNameChangedOkEvent";

export default class AbstractCategoryNameChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CategoryNameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CategoryNameChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CategoryNameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



