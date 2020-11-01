/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import InitUserEvent from "./events/InitUserEvent";
import InitNoUserEvent from "./events/InitNoUserEvent";
import RouteChangedLoginEvent from "./events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "./events/RouteChangedRegistrationEvent";
import RouteChangedForgotPasswordEvent from "./events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "./events/RouteChangedResetPasswordEvent";
import RouteChangedCategoriesEvent from "./events/RouteChangedCategoriesEvent";
import RouteChangedNextCardEvent from "./events/RouteChangedNextCardEvent";
import RouteChangedBoxSettingsEvent from "./events/RouteChangedBoxSettingsEvent";
import RouteChangedBoxCreateEvent from "./events/RouteChangedBoxCreateEvent";
import RouteOkEvent from "./events/RouteOkEvent";
import InitialLoginOkEvent from "./events/InitialLoginOkEvent";
import LogoutOkEvent from "./events/LogoutOkEvent";
import DisplayErrorOkEvent from "./events/DisplayErrorOkEvent";
import DisplayErrorAndLogoutOkEvent from "./events/DisplayErrorAndLogoutOkEvent";
import DisplayMessageOkEvent from "./events/DisplayMessageOkEvent";
import ClearToastOkEvent from "./events/ClearToastOkEvent";
import DisplaySaveBugDialogOkEvent from "./events/DisplaySaveBugDialogOkEvent";
import CancelSaveBugDialogOkEvent from "./events/CancelSaveBugDialogOkEvent";
import HideSaveBugDialogOkEvent from "./events/HideSaveBugDialogOkEvent";

export default class EventFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitUserEvent', 
			(eventData) => new InitUserEvent(eventData));
		ACEController.registerFactory('common.InitNoUserEvent', 
			(eventData) => new InitNoUserEvent(eventData));
		ACEController.registerFactory('common.RouteChangedLoginEvent', 
			(eventData) => new RouteChangedLoginEvent(eventData));
		ACEController.registerFactory('common.RouteChangedRegistrationEvent', 
			(eventData) => new RouteChangedRegistrationEvent(eventData));
		ACEController.registerFactory('common.RouteChangedForgotPasswordEvent', 
			(eventData) => new RouteChangedForgotPasswordEvent(eventData));
		ACEController.registerFactory('common.RouteChangedResetPasswordEvent', 
			(eventData) => new RouteChangedResetPasswordEvent(eventData));
		ACEController.registerFactory('common.RouteChangedCategoriesEvent', 
			(eventData) => new RouteChangedCategoriesEvent(eventData));
		ACEController.registerFactory('common.RouteChangedNextCardEvent', 
			(eventData) => new RouteChangedNextCardEvent(eventData));
		ACEController.registerFactory('common.RouteChangedBoxSettingsEvent', 
			(eventData) => new RouteChangedBoxSettingsEvent(eventData));
		ACEController.registerFactory('common.RouteChangedBoxCreateEvent', 
			(eventData) => new RouteChangedBoxCreateEvent(eventData));
		ACEController.registerFactory('common.RouteOkEvent', 
			(eventData) => new RouteOkEvent(eventData));
		ACEController.registerFactory('common.InitialLoginOkEvent', 
			(eventData) => new InitialLoginOkEvent(eventData));
		ACEController.registerFactory('common.LogoutOkEvent', 
			(eventData) => new LogoutOkEvent(eventData));
		ACEController.registerFactory('common.DisplayErrorOkEvent', 
			(eventData) => new DisplayErrorOkEvent(eventData));
		ACEController.registerFactory('common.DisplayErrorAndLogoutOkEvent', 
			(eventData) => new DisplayErrorAndLogoutOkEvent(eventData));
		ACEController.registerFactory('common.DisplayMessageOkEvent', 
			(eventData) => new DisplayMessageOkEvent(eventData));
		ACEController.registerFactory('common.ClearToastOkEvent', 
			(eventData) => new ClearToastOkEvent(eventData));
		ACEController.registerFactory('common.DisplaySaveBugDialogOkEvent', 
			(eventData) => new DisplaySaveBugDialogOkEvent(eventData));
		ACEController.registerFactory('common.CancelSaveBugDialogOkEvent', 
			(eventData) => new CancelSaveBugDialogOkEvent(eventData));
		ACEController.registerFactory('common.HideSaveBugDialogOkEvent', 
			(eventData) => new HideSaveBugDialogOkEvent(eventData));
	}

}




/******* S.D.G. *******/


