/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.ScheduleSelectedCardsCommand");
        this.ok = "ok";
        this.commandData.selectedCardIds = AppState.get_authorView_cardView_selectedCardIds();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleSelectedCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : this.commandData.cardIds
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/cards/schedule`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



