/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationLogin {

	static init() {
		ACEController.registerListener('login.UsernameChangedOkEvent', AppState.set_rootContainer_loginView_username);
		ACEController.registerListener('login.ToggleSaveInLocalStorageOkEvent', AppState.set_rootContainer_loginView_saveInLocalStorage);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_rootContainer_loggedInUser);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_rootContainer_username);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_rootContainer_password);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.set_rootContainer_loggedInUser);
		ACEController.registerListener('login.GetRoleOkEvent', AppState.merge_rootContainer_loggedInUser);
	}

}




/******* S.D.G. *******/



