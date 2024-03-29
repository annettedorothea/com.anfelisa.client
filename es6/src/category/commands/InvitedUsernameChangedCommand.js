/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractInvitedUsernameChangedCommand from "../../../gen/category/commands/AbstractInvitedUsernameChangedCommand";

export default class InvitedUsernameChangedCommand extends AbstractInvitedUsernameChangedCommand {
    execute(data) {
        if (data.usernameSearchString.length >= 2) {
            this.addSearchOutcome(data);
        } else {
            this.addTooShortOutcome(data);
        }
        this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



