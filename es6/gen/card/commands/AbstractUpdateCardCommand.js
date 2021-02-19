/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import UpdateCardOkEvent from "../../../gen/card/events/UpdateCardOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractUpdateCardCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.UpdateCardCommand");
        this.commandData.wanted = AppState.get_rootContainer_authorView_cardView_editedCard_wanted();
        this.commandData.given = AppState.get_rootContainer_authorView_cardView_editedCard_given();
        this.commandData.cardId = AppState.get_rootContainer_authorView_cardView_editedCard_cardId();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new UpdateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardId : this.commandData.cardId,
	    		given : this.commandData.given,
	    		wanted : this.commandData.wanted
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/card/update`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



