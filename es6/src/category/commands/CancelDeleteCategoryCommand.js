import AbstractCancelDeleteCategoryCommand from "../../../gen/category/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        this.commandData.displayDeleteCategory = false;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
