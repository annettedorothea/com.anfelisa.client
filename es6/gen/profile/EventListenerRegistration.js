/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "email"]
				)
			});
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "username"]
				)
			});
		ACEController.registerListener('profile.LoadUserOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "deletable"]
				)
			});
		ACEController.registerListener('profile.DeleteUserOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserErrorEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserClickOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "profileView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'profileView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "profileView", "showDeleteUserDialog"]
				)
			});
	}

}




/******* S.D.G. *******/



