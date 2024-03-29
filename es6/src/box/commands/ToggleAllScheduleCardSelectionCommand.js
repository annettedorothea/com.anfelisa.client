/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/box/commands/AbstractToggleAllScheduleCardSelectionCommand";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute(data) {
        let selectedCardIds = [];
        if (data.selectedCardIds.length < data.activeCardList.filter(i => i.hide !== true).length) {
            data.activeCardList.forEach(card => {
                if (card.hide !== true) {
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



