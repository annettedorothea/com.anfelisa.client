/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppUtils from "../../src/app/AppUtils";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', (data) => AppUtils.set(data, ["rootContainer", "loggedInUser"]));
		ACEController.registerListener('common.InitUserEvent', (data) => AppUtils.set(data, ["rootContainer", "language"]));
		ACEController.registerListener('common.InitUserEvent', (data) => AppUtils.set(data, ["rootContainer", "messages"]));
		ACEController.registerListener('common.InitNoUserEvent', (data) => AppUtils.set(data, ["rootContainer", "loggedInUser"]));
		ACEController.registerListener('common.InitNoUserEvent', (data) => AppUtils.set(data, ["rootContainer", "language"]));
		ACEController.registerListener('common.InitNoUserEvent', (data) => AppUtils.set(data, ["rootContainer", "messages"]));
		ACEController.registerListener('common.RouteChangedLoginEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "loginView"]]));
		ACEController.registerListener('common.RouteChangedPrivacyPolicyEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "privacyPolicyView"]]));
		ACEController.registerListener('common.RouteChangedRegistrationEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "registrationView"]]));
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "forgotPasswordView"]]));
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "resetPasswordView"]]));
		ACEController.registerListener('common.RouteChangedDashboardEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"]]));
		ACEController.registerListener('common.RouteChangedCategoriesEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "authorView"]]));
		ACEController.registerListener('common.RouteChangedNextCardEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "queryCardView"]]));
		ACEController.registerListener('common.RouteChangedBoxSettingsEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"]]));
		ACEController.registerListener('common.RouteChangedAllActiveCardsEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"]]));
		ACEController.registerListener('common.RouteChangedBoxCreateEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"]]));
		ACEController.registerListener('common.RouteOkEvent', (data) => AppUtils.setHash(data, ["rootContainer", "hash"]));
		ACEController.registerListener('common.InitialLoginOkEvent', (data) => AppUtils.set(data, ["rootContainer", "role"]));
		ACEController.registerListener('common.LogoutOkEvent', (data) => AppUtils.set(data, ["rootContainer", "loggedInUser"]));
		ACEController.registerListener('common.LogoutOkEvent', (data) => AppUtils.setStorage(data, ["rootContainer", "username"]));
		ACEController.registerListener('common.LogoutOkEvent', (data) => AppUtils.setStorage(data, ["rootContainer", "password"]));
		ACEController.registerListener('common.DisplayToastOkEvent', (data) => AppUtils.set(data, ["rootContainer", "messages"]));
		ACEController.registerListener('common.HideToastOkEvent', (data) => AppUtils.set(data, ["rootContainer", "messages"]));
		ACEController.registerListener('common.DestroyToastOkEvent', (data) => AppUtils.set(data, ["rootContainer", "messages"]));
		ACEController.registerListener('common.DisplaySaveBugDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "saveBugDialog", "display"]));
		ACEController.registerListener('common.DisplayVersionMismatchDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "versionMismatchDialog", "display"]));
		ACEController.registerListener('common.CancelVersionMismatchDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "versionMismatchDialog", "display"]));
		ACEController.registerListener('common.DisplayVersionMismatchErrorDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "versionMismatchErrorDialog", "display"]));
		ACEController.registerListener('common.CancelSaveBugDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "saveBugDialog", "display"]));
		ACEController.registerListener('common.HideSaveBugDialogOkEvent', (data) => AppUtils.set(data, ["rootContainer", "saveBugDialog", "display"]));
	}

}




/******* S.D.G. *******/



