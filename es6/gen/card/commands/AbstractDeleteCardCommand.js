/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DeleteCardOkEvent from "../../../gen/card/events/DeleteCardOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractDeleteCardCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.DeleteCardCommand");
        this.commandData.cardId = AppState.get_rootContainer_authorView_cardView_deleteCard_cardId();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new DeleteCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpDelete(`${Utils.settings.rootPath}/card/delete?cardId=${this.commandData.cardId}`, this.commandData.uuid, true).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



