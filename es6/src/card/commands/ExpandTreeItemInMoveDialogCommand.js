/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractExpandTreeItemInMoveDialogCommand from "../../../gen/card/commands/AbstractExpandTreeItemInMoveDialogCommand";
import {expandTreeItem} from "../../category/commands/ExpandTreeItemCommand";

export default class ExpandTreeItemInMoveDialogCommand extends AbstractExpandTreeItemInMoveDialogCommand {
    execute(data) {
        return expandTreeItem(data, data.rootCategoryInMoveDialog, this.addOkOutcome);
    }
}




/******* S.D.G. *******/



