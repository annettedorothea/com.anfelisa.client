/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import MoveCategoryOkEvent from "../../../gen/category/events/MoveCategoryOkEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractMoveCategoryCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.MoveCategoryCommand");
        this.ok = "ok";
        this.commandData.rootCategoryId = AppState.get_authorView_categoryTree_rootCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_authorView_categoryTree_dropTargetCategoryId();
        this.commandData.targetCategoryId = AppState.get_authorView_categoryTree_dropTargetCategoryId();
        this.commandData.movedCategoryId = AppState.get_authorView_categoryTree_movedCategory_categoryId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new MoveCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('MoveCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		movedCategoryId : this.commandData.movedCategoryId,
	    		targetCategoryId : this.commandData.targetCategoryId
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/category/move`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



