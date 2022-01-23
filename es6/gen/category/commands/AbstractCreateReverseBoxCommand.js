/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

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

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		rootCategoryId : data.rootCategoryId
	    	};
			AppUtils.httpPost(
					`${AppUtils.settings.rootPath}/box/create-reverse`, 
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
				events.push(new Event('category.CreateReverseBoxOkEvent'));
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



