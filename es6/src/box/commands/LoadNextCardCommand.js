/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import {Texts} from "../../app/Texts";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        if (data.openTodaysCards === 0) {
            this.addFinishedOutcome(data);
            data.textKey = Texts.messages.finished;
        } else {
            this.addOkOutcome(data);
            data.nextCard.index = 0;
            data.disableScoreButtons = true;
        }
        resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



