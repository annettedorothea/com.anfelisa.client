/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractRouteToForgotPasswordCommand from "../../../gen/common/commands/AbstractRouteToForgotPasswordCommand";

export default class RouteToForgotPasswordCommand extends AbstractRouteToForgotPasswordCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.hash = "#forgotpassword";
    	return data;
    }
}




/******* S.D.G. *******/



