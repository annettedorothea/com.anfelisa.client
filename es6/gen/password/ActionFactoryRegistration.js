import ACEController from "../ace/ACEController";
import UsernameForgotPasswordChangedAction from "../../src/password/actions/UsernameForgotPasswordChangedAction";
import ForgotPasswordAction from "../../src/password/actions/ForgotPasswordAction";
import PasswordChangedAction from "../../src/password/actions/PasswordChangedAction";
import ResetPasswordAction from "../../src/password/actions/ResetPasswordAction";

export default class ActionFactoryRegistrationPassword {

	static init() {
		ACEController.registerFactory('password.UsernameForgotPasswordChangedAction', 
			(actionData) => new UsernameForgotPasswordChangedAction(actionData.username));
		ACEController.registerFactory('password.ForgotPasswordAction', 
			(actionData) => new ForgotPasswordAction());
		ACEController.registerFactory('password.PasswordChangedAction', 
			(actionData) => new PasswordChangedAction(actionData.password, actionData.passwordRepetition));
		ACEController.registerFactory('password.ResetPasswordAction', 
			(actionData) => new ResetPasswordAction(actionData.password));
	}

}

/*       S.D.G.       */
