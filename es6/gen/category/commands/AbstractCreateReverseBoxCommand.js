/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteToDefaultAction from "../../../src/common/actions/RouteToDefaultAction";

export default class AbstractCreateReverseBoxCommand extends AsynchronousCommand {
    constructor() {
        super("category.CreateReverseBoxCommand");
    }
    
    initCommandData(data) {
        data.rootCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory", "rootCategoryId"]
        )
        ;
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}
	
	allMandatoryValuesAreSet(data) {
		if (data.rootCategoryId === undefined || data.rootCategoryId === null) {
			console.warn("AbstractCreateReverseBoxCommand: rootCategoryId is mandatory but is not set", data);
			return false;
		}
		return true;
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	if (this.allMandatoryValuesAreSet(data)) {
		    	let payload = {
		    		rootCategoryId : data.rootCategoryId
		    	};
				AppUtils.httpPost(
						`${AppUtils.settings.rootPath}/box/create-reverse`, 
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
				events.push(new Event('category.CreateReverseBoxOkEvent'));
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



