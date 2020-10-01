/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import RootCategoryNameChangedOkEvent from "../../../gen/box/events/RootCategoryNameChangedOkEvent";

export default class AbstractRootCategoryNameChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.RootCategoryNameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RootCategoryNameChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RootCategoryNameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



