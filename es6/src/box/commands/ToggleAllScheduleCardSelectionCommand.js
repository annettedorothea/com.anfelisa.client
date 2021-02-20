/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/box/commands/AbstractToggleAllScheduleCardSelectionCommand";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        let selectedCardIds = [];
        if (this.commandData.selectedCardIds.length < this.commandData.activeCardList.length) {
            this.commandData.activeCardList.forEach(card => {
                selectedCardIds.push(card.cardId)
            });
        }
        this.commandData.selectedCardIds = selectedCardIds;
        this.addOkOutcome();
    }
}




/******* S.D.G. *******/



