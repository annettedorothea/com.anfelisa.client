/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import PreviewCsvOkEvent from "../../../gen/category/events/PreviewCsvOkEvent";

export default class AbstractPreviewCsvCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.PreviewCsvCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PreviewCsvOkEvent(this.commandData).publish();
			break;
		default:
			throw 'PreviewCsvCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



