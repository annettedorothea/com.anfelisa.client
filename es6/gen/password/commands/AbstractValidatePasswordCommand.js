	/********************************************************************************
	 * generated by de.acegen
	 ********************************************************************************/
	
	
	

	import SynchronousCommand from "../../ace/SynchronousCommand";
	import Event from "../../ace/Event";
	import * as AppUtils from "../../../src/AppUtils";
	import * as AppState from "../../../src/AppState";
	
	export default class AbstractValidatePasswordCommand extends SynchronousCommand {
	    constructor() {
	        super("password.ValidatePasswordCommand");
	    }
	
	    initCommandData(data) {
	        data.password = AppState.get(
	        	["rootContainer", "mainView", "resetPasswordView", "password", "value"]
	        )
	        ;
	        data.passwordRepetition = AppState.get(
	        	["rootContainer", "mainView", "resetPasswordView", "passwordRepetition", "value"]
	        )
	        ;
	        data.passwordMismatch = AppState.get(
	        	["rootContainer", "mainView", "resetPasswordView", "passwordRepetition", "passwordMismatch"]
	        )
	        ;
	        data.outcomes = [];
	    }

		addOkOutcome(data) {
			data.outcomes.push("ok");
		}
		
		publishEvents(data) {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('password.ValidatePasswordOkEvent'));
			}
			
			this.publish(events, data);
		  	AppState.stateUpdated();
			this.trigger(actionsToBeTriggered);
	
		}

	}
	
	
	
	/******* S.D.G. *******/
	
	
	
