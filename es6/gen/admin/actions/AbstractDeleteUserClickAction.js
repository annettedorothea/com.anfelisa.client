import Action from "../../ace/SynchronousAction";
import DeleteUserClickCommand from "../../../src/admin/commands/DeleteUserClickCommand";

export default class AbstractDeleteUserClickAction extends Action {

    constructor( usernameToBeDeleted) {
        super({usernameToBeDeleted}, 'admin.DeleteUserClickAction');
    }
    
	getCommand() {
		return new DeleteUserClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
