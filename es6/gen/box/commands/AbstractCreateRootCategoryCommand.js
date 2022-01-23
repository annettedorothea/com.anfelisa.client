/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateRootCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("box.CreateRootCategoryCommand");
    }
    
    initCommandData(data) {
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

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryName : data.categoryName,
	    		dictionaryLookup : data.dictionaryLookup,
	    		givenLanguage : data.givenLanguage,
	    		wantedLanguage : data.wantedLanguage,
	    		maxCardsPerDay : data.maxCardsPerDay,
	    		maxInterval : data.maxInterval
	    	};
			AppUtils.httpPost(
					`${AppUtils.settings.rootPath}/box/create`, 
					data.uuid, 
					true,
					 payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('box.CreateRootCategoryOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new RouteAction(), 
						data: {
							hash: data.hash
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



