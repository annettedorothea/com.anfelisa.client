/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractSortSelectedCardsOutCommand from "../../../gen/box/commands/AbstractSortSelectedCardsOutCommand";

export default class SortSelectedCardsOutCommand extends AbstractSortSelectedCardsOutCommand {

    validateCommandData(data) {
    	//data.cardIds is mandatory String
    	//data.boxId is mandatory String
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



