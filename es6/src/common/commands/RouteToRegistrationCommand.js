/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractRouteToRegistrationCommand from "../../../gen/common/commands/AbstractRouteToRegistrationCommand";

export default class RouteToRegistrationCommand extends AbstractRouteToRegistrationCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.hash = "#registration"
    	return data;
    }
}




/******* S.D.G. *******/



