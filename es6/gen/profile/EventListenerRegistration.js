/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "email"]
				)
			});
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "username"]
				)
			});
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "deletable"]
				)
			});
		ACEController.registerListener('profile.DeleteUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserErrorEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserClickOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
	}

}




/******* S.D.G. *******/



