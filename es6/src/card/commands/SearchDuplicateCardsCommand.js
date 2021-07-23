/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractSearchDuplicateCardsCommand from "../../../gen/card/commands/AbstractSearchDuplicateCardsCommand";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {

    validateCommandData(data) {
    	return true;
    }

    handleResponse(data, resolve, reject) {
        data.cardDuplicates = data.cardList;
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



