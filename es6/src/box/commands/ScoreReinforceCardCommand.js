/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



