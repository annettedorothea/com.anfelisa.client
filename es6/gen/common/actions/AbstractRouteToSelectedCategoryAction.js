/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import RouteToSelectedCategoryCommand from "../../../src/common/commands/RouteToSelectedCategoryCommand";

export default class AbstractRouteToSelectedCategoryAction extends Action {

    constructor() {
        super('common.RouteToSelectedCategoryAction');
	}
		
	getCommand() {
		return new RouteToSelectedCategoryCommand();
	}


}




/******* S.D.G. *******/


