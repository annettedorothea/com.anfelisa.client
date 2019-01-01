import Action from "../../ace/SynchronousAction";
import DisplayMessageCommand from "../../../src/common/commands/DisplayMessageCommand";

export default class AbstractDisplayMessageAction extends Action {

    constructor( messageKey) {
        super({messageKey}, 'common.DisplayMessageAction');
    }

	getCommand() {
		return new DisplayMessageCommand(this.actionData);
	}


}

/*       S.D.G.       */
