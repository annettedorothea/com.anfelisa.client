/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationPassword {

	static init() {
		ACEController.registerListener('password.UsernameForgotPasswordChangedOkEvent', AppState.set_rootContainer_forgotPasswordView_username);
		ACEController.registerListener('password.PasswordChangedOkEvent', AppState.set_rootContainer_resetPasswordView_password);
		ACEController.registerListener('password.PasswordChangedOkEvent', AppState.set_rootContainer_resetPasswordView_passwordMismatch);
		ACEController.registerListener('password.PasswordRepetitionChangedOkEvent', AppState.set_rootContainer_resetPasswordView_passwordRepetition);
		ACEController.registerListener('password.PasswordRepetitionChangedOkEvent', AppState.set_rootContainer_resetPasswordView_passwordMismatch);
	}

}




/******* S.D.G. *******/



