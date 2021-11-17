/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";

export default class AbstractWantedLanguageChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.WantedLanguageChangedCommand");
    }

    initCommandData(data) {
        data.givenLanguage = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "givenLanguage"]
        )
        ;
        data.dictionaryLookup = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookup"]
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
				events.push(new Event('box.WantedLanguageChangedOkEvent'));
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}




/******* S.D.G. *******/



