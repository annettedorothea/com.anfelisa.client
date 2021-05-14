/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import RootCategoryNameChangedOkEvent from "../../../gen/box/events/RootCategoryNameChangedOkEvent";

export default class AbstractRootCategoryNameChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.RootCategoryNameChangedCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new RootCategoryNameChangedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



