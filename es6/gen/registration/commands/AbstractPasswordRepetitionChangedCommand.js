/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractPasswordRepetitionChangedCommand extends SynchronousCommand {
    constructor() {
        super("registration.PasswordRepetitionChangedCommand");
    }

    initCommandData(data) {
        data.password = AppState.get(
        	["rootContainer", "mainView", "registrationView", "password"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('registration.PasswordRepetitionChangedOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}




/******* S.D.G. *******/



