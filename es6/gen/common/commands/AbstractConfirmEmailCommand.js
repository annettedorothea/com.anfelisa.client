import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ConfirmEmailOkEvent from "../../../src/common/events/ConfirmEmailOkEvent";
import ConfirmEmailErrorEvent from "../../../src/common/events/ConfirmEmailErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractConfirmEmailCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.ConfirmEmailCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ConfirmEmailOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new ConfirmEmailErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ConfirmEmailCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */