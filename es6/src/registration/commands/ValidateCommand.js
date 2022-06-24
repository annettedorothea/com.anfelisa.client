/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractValidateCommand from "../../../gen/registration/commands/AbstractValidateCommand";

export default class ValidateCommand extends AbstractValidateCommand {
    execute(data) {
        data.disabled = data.available === false ||
            data.emailInvalid === true ||
            data.passwordMismatch === true ||
            (!data.username || data.username && data.username.length === 0) ||
            (!data.email || data.email && data.email.length === 0) ||
            (!data.password || data.password && data.password.length === 0)
        this.addOkOutcome(data)
     	return data;
    }
}




/******* S.D.G. *******/


