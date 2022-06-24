/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteToDefaultAction from "../../../src/common/actions/RouteToDefaultAction";

export default class AbstractSaveBoxSettingsCommand extends AsynchronousCommand {
    constructor() {
        super("box.SaveBoxSettingsCommand");
    }
    
    initCommandData(data) {
        data.boxId = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxId"]
        )
        ;
        data.maxInterval = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxInterval"]
        )
        ;
        data.maxCardsPerDay = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDay"]
        )
        ;
        data.categoryId = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryId"]
        )
        ;
        data.categoryName = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryName"]
        )
        ;
        data.dictionaryLookup = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookup"]
        )
        ;
        data.givenLanguage = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "givenLanguage"]
        )
        ;
        data.wantedLanguage = AppState.get(
        	["rootContainer", "mainView", "boxSettingsView", "boxSettings", "wantedLanguage"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.maxCardsPerDay === undefined || data.maxCardsPerDay === null) {
			console.warn("AbstractSaveBoxSettingsCommand: maxCardsPerDay is mandatory but is not set", data);
			return false;
		}
		if (data.boxId === undefined || data.boxId === null) {
			console.warn("AbstractSaveBoxSettingsCommand: boxId is mandatory but is not set", data);
			return false;
		}
		if (data.categoryId === undefined || data.categoryId === null) {
			console.warn("AbstractSaveBoxSettingsCommand: categoryId is mandatory but is not set", data);
			return false;
		}
		if (data.categoryName === undefined || data.categoryName === null) {
			console.warn("AbstractSaveBoxSettingsCommand: categoryName is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		maxInterval : data.maxInterval,
		    		maxCardsPerDay : data.maxCardsPerDay,
		    		boxId : data.boxId,
		    		categoryId : data.categoryId,
		    		categoryName : data.categoryName,
		    		dictionaryLookup : data.dictionaryLookup,
		    		givenLanguage : data.givenLanguage,
		    		wantedLanguage : data.wantedLanguage
		    	};
				AppUtils.httpPut(
						`${AppUtils.settings.rootPath}/box/update`, 
						data.uuid, 
						true,
						 payload)
					.then(() => {
						this.handleResponse(data, resolve, reject);
					}, (error) => {
						data.error = error;
						this.handleError(data, resolve, reject);
					})
					.catch(x => reject(x));
			} else {
				resolve(data);
			}
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('box.SaveBoxSettingsOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new RouteToDefaultAction(), 
						data: {
						}
					}
				);
			}
			
			this.publish(events, data).then(() => {
		  		AppState.stateUpdated();
				this.trigger(actionsToBeTriggered).then(resolve);
			});
		})
	
	}

}



/******* S.D.G. *******/



