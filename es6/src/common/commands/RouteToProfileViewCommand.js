/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractRouteToProfileViewCommand from "../../../gen/common/commands/AbstractRouteToProfileViewCommand";

export default class RouteToProfileViewCommand extends AbstractRouteToProfileViewCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.hash = "#profile"
    	return data;
    }
}




/******* S.D.G. *******/



