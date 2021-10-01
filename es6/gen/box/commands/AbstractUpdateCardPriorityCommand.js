/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import LoadActiveCardsAction from "../../../src/box/actions/LoadActiveCardsAction";

export default class AbstractUpdateCardPriorityCommand extends AsynchronousCommand {
    constructor() {
        super("box.UpdateCardPriorityCommand");
    }
    
    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardId : data.cardId,
	    		priority : data.priority
	    	};
			AppUtils.httpPut(`${AppUtils.settings.rootPath}/card/update-priority`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new TriggerAction().publish(
				new LoadActiveCardsAction(), 
					{
					}
			)
		}
    }

}



/******* S.D.G. *******/



