/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractUpdateCardPriorityCommand from "../../../gen/box/commands/AbstractUpdateCardPriorityCommand";

export default class UpdateCardPriorityCommand extends AbstractUpdateCardPriorityCommand {

    validateCommandData(data) {
    	//data.cardId is mandatory String
    	return true;
    }

    handleResponse(data, resolve, reject) {
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



