/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import {createInfoMessage} from "../../AppUtils";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        if (data.openTodaysCards === 0) {
            this.addFinishedOutcome(data);
            data.hash = "#dashboard";
            data.message = createInfoMessage("finished");
        } else {
            this.addOkOutcome(data);
            data.nextCard.index = 0;
            data.enableScoreButtons = false;
        }
        resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



