/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadCardsOkEvent from "../../../gen/card/events/LoadCardsOkEvent";
import LoadCardsNoCategorySelectedEvent from "../../../gen/card/events/LoadCardsNoCategorySelectedEvent";

export default class AbstractLoadCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.LoadCardsCommand");
        this.commandData.selectedCategory = AppState.get_authorView_categoryTree_selectedCategory();
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder();
        this.commandData.filterNonScheduled = AppState.get_authorView_filterNonScheduled();
        this.commandData.priority = AppState.get_authorView_priority();
        this.commandData.reverse = AppState.get_authorView_reverse();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}
	addNoCategorySelectedOutcome() {
		this.commandData.outcomes.push("noCategorySelected");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new LoadCardsOkEvent(this.commandData).publish());
		}
		if (this.commandData.outcomes.includes("noCategorySelected")) {
			promises.push(new LoadCardsNoCategorySelectedEvent(this.commandData).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/cards?categoryId=${this.commandData.categoryId}&filterNonScheduled=${this.commandData.filterNonScheduled}&priority=${this.commandData.priority}&reverse=${this.commandData.reverse}`, this.commandData.uuid, true).then((data) => {
				this.commandData.cardList = data.cardList;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



