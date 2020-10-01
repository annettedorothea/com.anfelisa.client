/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import GivenOfEditedCardChangedOkEvent from "../../../gen/card/events/GivenOfEditedCardChangedOkEvent";

export default class AbstractGivenOfEditedCardChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.GivenOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenOfEditedCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GivenOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



