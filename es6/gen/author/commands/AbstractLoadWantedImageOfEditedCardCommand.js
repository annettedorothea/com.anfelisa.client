import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadWantedImageOfEditedCardOkEvent from "../../../gen/author/events/LoadWantedImageOfEditedCardOkEvent";

export default class AbstractLoadWantedImageOfEditedCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.LoadWantedImageOfEditedCardCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadWantedImageOfEditedCardOkEvent(this.commandData).publish();
			break;
		case this.error:
			break;
		default:
			throw 'LoadWantedImageOfEditedCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
