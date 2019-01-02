import Action from "../../ace/SynchronousAction";
import RouteCommand from "../../../src/common/commands/RouteCommand";

export default class AbstractRouteAction extends Action {

    constructor( hash) {
        super({hash}, 'common.RouteAction');
    }
    
	getCommand() {
		return new RouteCommand(this.actionData);
	}


}

/*       S.D.G.       */
