import Action from "../../ace/SynchronousAction";
import RouteChangedCommand from "../../../src/common/commands/RouteChangedCommand";

export default class AbstractRouteChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.RouteChangedAction', false, true);
    }

	getCommand() {
		return new RouteChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
