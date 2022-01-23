	/********************************************************************************
	 * generated by de.acegen
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
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('box.WantedLanguageChangedOkEvent'));
			}
			
			this.publish(events, data);
		  	AppState.stateUpdated();
			this.trigger(actionsToBeTriggered);
	
		}

	}
	
	
	
	/******* S.D.G. *******/
	
	
	
