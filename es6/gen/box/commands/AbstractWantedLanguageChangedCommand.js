/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import WantedLanguageChangedOkEvent from "../../../gen/box/events/WantedLanguageChangedOkEvent";

export default class AbstractWantedLanguageChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.WantedLanguageChangedCommand");
        this.ok = "ok";
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage();
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedLanguageChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedLanguageChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



