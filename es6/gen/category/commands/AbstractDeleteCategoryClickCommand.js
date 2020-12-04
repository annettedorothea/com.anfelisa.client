/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DeleteCategoryClickOkEvent from "../../../gen/category/events/DeleteCategoryClickOkEvent";

export default class AbstractDeleteCategoryClickCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.DeleteCategoryClickCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DeleteCategoryClickOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



