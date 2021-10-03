/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppUtils from "../../src/app/AppUtils";

export default class EventListenerRegistrationRegistration {

	static init() {
		ACEController.registerListener('registration.CheckUsernameEmptyEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "available"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.CheckUsernameOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "available"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.UsernameChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "username"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.EmailChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "emailInvalid"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.EmailChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "email"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.PasswordChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "password"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.PasswordChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "passwordMismatch"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.PasswordRepetitionChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "passwordRepetition"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.PasswordRepetitionChangedOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "mainView", "passwordMismatch"], 
				[{ path: ["rootContainer", "mainView"], group: "registrationView" }]
			)
		});
		ACEController.registerListener('registration.LoginOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "loggedInUser", "username"], 
				[]
			)
		});
		ACEController.registerListener('registration.LoginOkEvent', (data) => {
			AppUtils.set(
				data, 
				["rootContainer", "loggedInUser", "token"], 
				[]
			)
		});
	}

}




/******* S.D.G. *******/



