/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractMoveCardsClickedCommand from "../../../gen/card/commands/AbstractMoveCardsClickedCommand";

export default class MoveCardsClickedCommand extends AbstractMoveCardsClickedCommand {
    execute(data) {
        data.moveCards = {
            selectTargetCategory: true,
            rootCategoryInMoveDialog: structuredClone(data.rootCategory),
        };
        this.addOkOutcome(data);
        return data;
    }
}




/******* S.D.G. *******/



