import Action from "../../ace/SynchronousAction";
import DisplayErrorAndLogoutCommand from "../../../src/common/commands/DisplayErrorAndLogoutCommand";

export default class AbstractDisplayErrorAndLogoutAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.DisplayErrorAndLogoutAction');
    }

	getCommand() {
		return new DisplayErrorAndLogoutCommand(this.actionData);
	}


}

/*       S.D.G.       */
