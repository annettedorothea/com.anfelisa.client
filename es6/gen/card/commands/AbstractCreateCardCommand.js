/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import CreateCardOkEvent from "../../../gen/card/events/CreateCardOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractCreateCardCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.CreateCardCommand");
        this.ok = "ok";
        this.commandData.wanted = AppState.get_authorView_cardView_newCard_wanted();
        this.commandData.given = AppState.get_authorView_cardView_newCard_given();
        this.commandData.image = AppState.get_authorView_cardView_newCard_image();
        this.commandData.categoryId = AppState.get_authorView_categoryTree_selectedCategory_categoryId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CreateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		wanted : this.commandData.wanted,
	    		given : this.commandData.given,
	    		image : this.commandData.image,
	    		categoryId : this.commandData.categoryId
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/card/create`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



