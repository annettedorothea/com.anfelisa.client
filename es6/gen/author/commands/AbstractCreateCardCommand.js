import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateCardOkEvent from "../../../src/author/events/CreateCardOkEvent";
import CreateCardUnauthorizedEvent from "../../../src/author/events/CreateCardUnauthorizedEvent";
import LoadCardsAction from "../../../src/author/actions/LoadCardsAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractCreateCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CreateCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CreateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new CreateCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */