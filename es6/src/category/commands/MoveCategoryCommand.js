import AbstractMoveCategoryCommand from "../../../gen/category/commands/AbstractMoveCategoryCommand";
import {getState} from "../../../gen/ace/AppState";

export default class MoveCategoryCommand extends AbstractMoveCategoryCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.targetCategoryId = data.dropTargetCategoryId;
        this.commandData.movedCategoryId = data.movedCategory.categoryId;
        this.commandData.formerParentId = data.movedCategory.parentCategoryId;
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.selectedCategoryId = this.commandData.targetCategoryId;
        this.commandData.outcome = this.ok;

    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
