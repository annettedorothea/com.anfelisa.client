/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import AbstractFilterNonScheduledCardsCommand from "../../../gen/category/commands/AbstractFilterNonScheduledCardsCommand";

export default class FilterNonScheduledCardsCommand extends AbstractFilterNonScheduledCardsCommand {
    execute() {
        this.commandData.filterNonScheduled = !this.commandData.filterNonScheduled;
        this.commandData.selectedCategoryId = this.commandData.selectedCategory ? this.commandData.selectedCategory.categoryId : undefined;
        this.commandData.outcome = this.ok;
    }
}




/******* S.D.G. *******/


