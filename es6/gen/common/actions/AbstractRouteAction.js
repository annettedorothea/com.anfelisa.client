/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import RouteCommand from "../../../src/common/commands/RouteCommand";

export default class AbstractRouteAction extends Action {

    constructor(callback) {
        super('common.RouteAction', callback);
	}
		
	getCommand() {
		return new RouteCommand();
	}


}




/******* S.D.G. *******/



