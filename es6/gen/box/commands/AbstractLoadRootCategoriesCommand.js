import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadRootCategoriesOkEvent from "../../../src/box/events/LoadRootCategoriesOkEvent";
import LoadRootCategoriesUnauthorizedEvent from "../../../src/box/events/LoadRootCategoriesUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadRootCategoriesCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadRootCategoriesCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadRootCategoriesOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadRootCategoriesUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadRootCategoriesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
