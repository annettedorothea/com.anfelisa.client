import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
