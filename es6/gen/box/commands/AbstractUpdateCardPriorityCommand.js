/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import LoadActiveCardsAction from "../../../src/box/actions/LoadActiveCardsAction";

export default class AbstractUpdateCardPriorityCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.UpdateCardPriorityCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new TriggerAction(new LoadActiveCardsAction()).publish());
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
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



