/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractUpdateCardPriorityCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.UpdateCardPriorityCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCardPriorityCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardId : this.commandData.cardId,
	    		priority : this.commandData.priority
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/card/update-priority`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



