/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";
import {Texts} from "../../app/Texts";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        this.addOkOutcome(data);
        data.showDeleteUserDialog = undefined;
    	resolve(data);
    }
    handleError(data, resolve) {
        this.addErrorOutcome(data);
        data.textKey = Texts.messages.lastAdminMustNotBeDeleted;
        data.showDeleteUserDialog = undefined;
        resolve(data);
    }
}



/******* S.D.G. *******/



