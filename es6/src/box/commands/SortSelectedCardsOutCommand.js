/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractSortSelectedCardsOutCommand from "../../../gen/box/commands/AbstractSortSelectedCardsOutCommand";

export default class SortSelectedCardsOutCommand extends AbstractSortSelectedCardsOutCommand {

    validateCommandData() {
        this.commandData.cardIds = this.commandData.selectedCardIds;
    	return true;
    }

    handleResponse(resolve, reject) {
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/


