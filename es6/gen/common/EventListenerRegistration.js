import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import LoginView from "../../src/common/views/LoginView";
import RegistrationView from "../../src/common/views/RegistrationView";
import ForgotPasswordView from "../../src/common/views/ForgotPasswordView";
import ResetPasswordView from "../../src/common/views/ResetPasswordView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitNoUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.RouteChangedLoginEvent', LoginView.render);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', RegistrationView.render);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', ForgotPasswordView.render);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', ResetPasswordView.render);
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.CheckUsernameAvailableEvent', RegistrationView.usernameAvailable);
		ACEController.registerListener('common.CheckUsernameNotAvailableEvent', RegistrationView.usernameNotAvailable);
		ACEController.registerListener('common.RegisterUserOkEvent', CommonView.initUser);
		ACEController.registerListener('common.RegisterUserErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.LoginOkEvent', CommonView.initUser);
		ACEController.registerListener('common.LoginUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.resetUser);
		ACEController.registerListener('common.ForgotPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.ResetPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ResetPasswordErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayErrorOkEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayMessageOkEvent', CommonView.displayMessage);
	}

}

/*       S.D.G.       */
