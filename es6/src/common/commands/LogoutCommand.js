/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLogoutCommand from "../../../gen/common/commands/AbstractLogoutCommand";

export default class LogoutCommand extends AbstractLogoutCommand {
    execute(data) {
        data.loggedInUser = null;
        data.token = null;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



