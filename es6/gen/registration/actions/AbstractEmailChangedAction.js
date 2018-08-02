import Action from "../../ace/SynchronousAction";
import EmailChangedCommand from "../../../src/registration/commands/EmailChangedCommand";

export default class AbstractEmailChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.EmailChangedAction');
    }

	getCommand() {
		return new EmailChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */