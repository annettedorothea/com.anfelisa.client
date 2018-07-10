import Action from "../../ace/SynchronousAction";
import InitCommand from "../../../src/common/commands/InitCommand";

export default class AbstractInitAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.InitAction');
    }

	getCommand() {
		return new InitCommand(this.actionData);
	}


}

/*       S.D.G.       */
