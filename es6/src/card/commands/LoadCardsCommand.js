/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoadCardsCommand from "../../../gen/card/commands/AbstractLoadCardsCommand";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {

    validateCommandData(data) {
        data.categoryId = data.selectedCategory.categoryId;
    	return true;
    }

    handleResponse(data, resolve) {
        data.cardView = {

            naturalInputOrder: data.naturalInputOrder === undefined ? data.reverse === false : data.naturalInputOrder,
            cardTable: {
                cardList: data.cardList,
                filter: "",
                newCard: {
                    given: "",
                    wanted: "",
                    displaySpinner: false,
                },
                cardDuplicates: [],
            },
            editedCard: {
                cardId: "",
                given: "",
                wanted: "",
            },
            dictionaryValue: null,
            selectedCardIds: [],
            movedCardIds: [],
            dragTargetCardId: null,
            deleteCard: {
                confirmDelete: false,
                cardId: ""
            },
        }
    	this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/


