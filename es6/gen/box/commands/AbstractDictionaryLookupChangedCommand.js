/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractDictionaryLookupChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.DictionaryLookupChangedCommand");
    }

    initCommandData(data) {
        data.givenLanguage = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "givenLanguage"]
        );
        data.wantedLanguage = AppUtils.get(
        	["rootContainer", "mainView", "boxSettings", "wantedLanguage"]
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
			new Event('box.DictionaryLookupChangedOkEvent').publish(data);
			AppUtils.stateUpdated();
		}
    }
}




/******* S.D.G. *******/



