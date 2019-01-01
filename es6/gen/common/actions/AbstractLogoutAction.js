import Action from "../../ace/SynchronousAction";
import LogoutCommand from "../../../src/common/commands/LogoutCommand";

export default class AbstractLogoutAction extends Action {

    constructor() {
        super({}, 'common.LogoutAction');
    }

	getCommand() {
		return new LogoutCommand(this.actionData);
	}


}

/*       S.D.G.       */
