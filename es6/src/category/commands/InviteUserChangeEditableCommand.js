/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractInviteUserChangeEditableCommand from "../../../gen/category/commands/AbstractInviteUserChangeEditableCommand";

export default class InviteUserChangeEditableCommand extends AbstractInviteUserChangeEditableCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.editable = !data.editable;
    	return data;
    }
}




/******* S.D.G. *******/



