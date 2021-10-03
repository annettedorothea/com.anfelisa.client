/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractWantedLanguageChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.WantedLanguageChangedCommand");
    }

    initCommandData(data) {
        data.givenLanguage = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "givenLanguage"]
        );
        data.dictionaryLookup = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "dictionaryLookup"]
        );
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.WantedLanguageChangedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



