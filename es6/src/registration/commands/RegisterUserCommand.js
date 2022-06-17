/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import {Texts} from "../../app/Texts";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        this.addOkOutcome(data);
        data.textKey = Texts.messages.confirmEmail;
    	resolve(data);
    }
    handleError(data, resolve) {
        this.addErrorOutcome(data);
        data.textKey = Texts.messages.usernameAlreadyTaken;
        resolve(data);
    }
}




/******* S.D.G. *******/


