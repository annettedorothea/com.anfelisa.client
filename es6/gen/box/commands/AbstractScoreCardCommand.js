/********************************************************************************
 * generated by de.acegen 1.0.2
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import InitBoxesForDayDuringScoreAction from "../../../src/box/actions/InitBoxesForDayDuringScoreAction";

export default class AbstractScoreCardCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.ScoreCardCommand");
        this.ok = "ok";
        this.commandData.scheduledCardId = AppState.get_cardView_scheduledCardId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new InitBoxesForDayDuringScoreAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		scheduledCardId : this.commandData.scheduledCardId,
	    		scoredCardQuality : this.commandData.scoredCardQuality
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/card/score`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



