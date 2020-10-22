/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import DictionaryLookupChangedOkEvent from "../../../gen/box/events/DictionaryLookupChangedOkEvent";

export default class AbstractDictionaryLookupChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.DictionaryLookupChangedCommand");
        this.ok = "ok";
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage();
        this.commandData.wantedLanguage = AppState.get_boxSettingsView_wantedLanguage();
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DictionaryLookupChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DictionaryLookupChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



