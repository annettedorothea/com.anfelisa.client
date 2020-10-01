/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import LoadWantedImageOfEditedCardOkEvent from "../../../gen/card/events/LoadWantedImageOfEditedCardOkEvent";

export default class AbstractLoadWantedImageOfEditedCardCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.LoadWantedImageOfEditedCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadWantedImageOfEditedCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'LoadWantedImageOfEditedCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



