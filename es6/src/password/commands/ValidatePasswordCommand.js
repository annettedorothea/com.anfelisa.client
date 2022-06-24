/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractValidatePasswordCommand from "../../../gen/password/commands/AbstractValidatePasswordCommand";

export default class ValidatePasswordCommand extends AbstractValidatePasswordCommand {
    execute(data) {
        data.disabled = data.passwordMismatch === true ||
            (!data.password || data.password && data.password.length === 0)
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/


