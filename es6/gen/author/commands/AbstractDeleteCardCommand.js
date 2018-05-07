import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCardOkEvent from "../../../src/author/events/DeleteCardOkEvent";
import DeleteCardUnauthorizedEvent from "../../../src/author/events/DeleteCardUnauthorizedEvent";
import LoadCardsAction from "../../../src/author/actions/LoadCardsAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDeleteCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.DeleteCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new DeleteCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */