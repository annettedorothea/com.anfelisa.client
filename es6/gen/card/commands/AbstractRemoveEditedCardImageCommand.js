/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import RemoveEditedCardImageOkEvent from "../../../gen/card/events/RemoveEditedCardImageOkEvent";

export default class AbstractRemoveEditedCardImageCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.RemoveEditedCardImageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RemoveEditedCardImageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RemoveEditedCardImageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



