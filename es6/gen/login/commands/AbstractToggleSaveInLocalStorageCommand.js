/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import ToggleSaveInLocalStorageOkEvent from "../../../gen/login/events/ToggleSaveInLocalStorageOkEvent";

export default class AbstractToggleSaveInLocalStorageCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "login.ToggleSaveInLocalStorageCommand");
        this.commandData.outcomes = [];
        this.commandData.saveInLocalStorage = AppState.get_loginView_saveInLocalStorage();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new ToggleSaveInLocalStorageOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



