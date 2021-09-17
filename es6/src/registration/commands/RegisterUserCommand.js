/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import * as AppUtils from "../../app/AppUtils";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        this.addOkOutcome(data);
        data.hash = "#";
        data.message = AppUtils.createInfoMessage("confirmEmail");
    	resolve(data);
    }
    handleError(data, resolve) {
        this.addErrorOutcome(data);
        resolve(data);
    }
}




/******* S.D.G. *******/


