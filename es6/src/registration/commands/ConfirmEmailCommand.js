import AbstractConfirmEmailCommand from "../../../gen/registration/commands/AbstractConfirmEmailCommand";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {

    initCommandData() {
        //add from appState to commandData
    }

    isCommandDataValid() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "emailConfirmed";
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
