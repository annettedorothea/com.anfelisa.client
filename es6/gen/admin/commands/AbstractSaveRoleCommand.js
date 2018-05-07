import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveRoleUnauthorizedEvent from "../../../src/admin/events/SaveRoleUnauthorizedEvent";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractSaveRoleCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.SaveRoleCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new GetAllUsersAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new SaveRoleUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */