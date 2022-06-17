/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/AppUtils";
import * as AppState from "../../../src/AppState";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractMoveCardsCommand extends AsynchronousCommand {
    constructor() {
        super("card.MoveCardsCommand");
    }
    
    initCommandData(data) {
        data.movedCardIds = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "movedCardIds"]
        )
        ;
        data.dropTargetCategoryId = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
        )
        ;
        data.rootCategory = AppState.get(
        	["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"]
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
	    		cardIdList : data.cardIdList,
	    		categoryId : data.categoryId
	    	};
			AppUtils.httpPut(
					`${AppUtils.settings.rootPath}/cards/move`, 
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
	    });
	}
	
	publishEvents(data) {
		return new Promise((resolve) => {
			const events = [];
			const actionsToBeTriggered = [];
			if (data.outcomes.includes("ok")) {
				events.push(new Event('card.MoveCardsOkEvent'));
				actionsToBeTriggered.push(
					{
						action: new ReloadCategoryTreeAction(), 
						data: {
							selectedCategoryId: data.selectedCategoryId, 
							categoryIdToBeExpanded: data.categoryIdToBeExpanded
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



