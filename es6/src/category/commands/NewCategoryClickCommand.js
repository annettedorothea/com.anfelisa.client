import AbstractNewCategoryClickCommand from "../../../gen/category/commands/AbstractNewCategoryClickCommand";

export default class NewCategoryClickCommand extends AbstractNewCategoryClickCommand {
    execute() {
        this.commandData.displayNewCategory = true;
        this.commandData.categoryName = "";
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
