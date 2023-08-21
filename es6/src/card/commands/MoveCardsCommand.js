/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    validateCommandData(data) {
        data.cardIdList = data.selectedCardIds;
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
