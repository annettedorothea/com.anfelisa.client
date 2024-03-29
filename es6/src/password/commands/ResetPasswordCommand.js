/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";
import {Texts} from "../../app/Texts";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        data.textKey = Texts.messages.passwordReset;
        this.addOkOutcome(data);
        resolve(data);
    }
    handleError(data, resolve) {
        data.textKey = Texts.messages.tokenDoesNotExist;
        this.addErrorOutcome(data);
        resolve(data);
    }
}




/******* S.D.G. *******/

