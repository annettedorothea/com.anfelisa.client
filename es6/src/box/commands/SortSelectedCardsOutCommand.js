/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractSortSelectedCardsOutCommand from "../../../gen/box/commands/AbstractSortSelectedCardsOutCommand";

export default class SortSelectedCardsOutCommand extends AbstractSortSelectedCardsOutCommand {

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



