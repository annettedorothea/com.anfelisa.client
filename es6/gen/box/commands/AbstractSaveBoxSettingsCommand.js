/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSaveBoxSettingsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.SaveBoxSettingsCommand");
        this.ok = "ok";
        this.commandData.boxId = AppState.get_boxSettingsView_boxId();
        this.commandData.maxInterval = AppState.get_boxSettingsView_maxInterval();
        this.commandData.maxCardsPerDay = AppState.get_boxSettingsView_maxCardsPerDay();
        this.commandData.categoryId = AppState.get_boxSettingsView_categoryId();
        this.commandData.categoryName = AppState.get_boxSettingsView_categoryName();
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup();
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage();
        this.commandData.wantedLanguage = AppState.get_boxSettingsView_wantedLanguage();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveBoxSettingsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		maxInterval : this.commandData.maxInterval,
	    		maxCardsPerDay : this.commandData.maxCardsPerDay,
	    		boxId : this.commandData.boxId,
	    		categoryId : this.commandData.categoryId,
	    		categoryName : this.commandData.categoryName,
	    		dictionaryLookup : this.commandData.dictionaryLookup,
	    		givenLanguage : this.commandData.givenLanguage,
	    		wantedLanguage : this.commandData.wantedLanguage
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/box/update`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



