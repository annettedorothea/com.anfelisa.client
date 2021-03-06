import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "passwordReset";
        this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.hash = "#";
        this.addErrorOutcome();
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
