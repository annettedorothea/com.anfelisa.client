import Action from "../../ace/SynchronousAction";
import DeleteUserCancelCommand from "../../../src/admin/commands/DeleteUserCancelCommand";

export default class AbstractDeleteUserCancelAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.DeleteUserCancelAction');
    }

	getCommand() {
		return new DeleteUserCancelCommand(this.actionData);
	}


}

/*       S.D.G.       */