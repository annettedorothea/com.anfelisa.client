import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "passwordRequestSubmitted";
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
