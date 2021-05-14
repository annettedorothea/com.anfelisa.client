/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import LoginSaveInLocalStorageEvent from "../../../gen/login/events/LoginSaveInLocalStorageEvent";
import LoginDoNotSaveInLocalStorageEvent from "../../../gen/login/events/LoginDoNotSaveInLocalStorageEvent";
import GetRoleAction from "../../../src/login/actions/GetRoleAction";

export default class AbstractLoginCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "login.LoginCommand");
        this.commandData.outcomes = [];
        this.commandData.username = AppState.get_rootContainer_loginView_username();
        this.commandData.password = AppState.get_rootContainer_loginView_password();
        this.commandData.saveInLocalStorage = AppState.get_rootContainer_loginView_saveInLocalStorage();
    }

	addSaveInLocalStorageOutcome() {
		this.commandData.outcomes.push("saveInLocalStorage");
	}
	addDoNotSaveInLocalStorageOutcome() {
		this.commandData.outcomes.push("doNotSaveInLocalStorage");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("saveInLocalStorage")) {
			new LoginSaveInLocalStorageEvent(this.commandData).publish();
			new TriggerAction(new GetRoleAction()).publish();
		}
		if (this.commandData.outcomes.includes("doNotSaveInLocalStorage")) {
			new LoginDoNotSaveInLocalStorageEvent(this.commandData).publish();
			new TriggerAction(new GetRoleAction()).publish();
		}
    }
}




/******* S.D.G. *******/



