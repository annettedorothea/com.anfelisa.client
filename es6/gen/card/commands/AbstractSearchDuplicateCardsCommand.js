/********************************************************************************
 * generated by de.acegen 0.9.13
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import SearchDuplicateCardsOkEvent from "../../../gen/card/events/SearchDuplicateCardsOkEvent";

export default class AbstractSearchDuplicateCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.SearchDuplicateCardsCommand");
        this.ok = "ok";
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder();
        this.commandData.given = AppState.get_authorView_cardView_newCard_given();
        this.commandData.wanted = AppState.get_authorView_cardView_newCard_wanted();
        this.commandData.categoryId = AppState.get_authorView_categoryTree_selectedCategory_categoryId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new SearchDuplicateCardsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SearchDuplicateCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/cards/search?given=${this.commandData.given}&wanted=${this.commandData.wanted}&naturalInputOrder=${this.commandData.naturalInputOrder}&categoryId=${this.commandData.categoryId}`, this.commandData.uuid, true).then((data) => {
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



