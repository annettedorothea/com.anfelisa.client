/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleAllScheduleCardSelectionCommand";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute(data) {
        let selectedCardIds = [];
        if (data.selectedCardIds.length < data.cardList.length) {
            data.cardList.forEach(card => {
                if (card.given.indexOf(data.filter) >= 0 || card.wanted.indexOf(data.filter) >= 0) {
                    selectedCardIds.push(card.cardId)
                }
            });
        }
        data.selectedCardIds = selectedCardIds;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



