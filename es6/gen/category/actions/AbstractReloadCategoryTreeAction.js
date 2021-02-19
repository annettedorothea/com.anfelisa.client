/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ReloadCategoryTreeCommand from "../../../src/category/commands/ReloadCategoryTreeCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractReloadCategoryTreeAction extends Action {

    constructor( selectedCategoryId, categoryIdToBeExpanded) {
        super({selectedCategoryId, categoryIdToBeExpanded}, 'category.ReloadCategoryTreeAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ReloadCategoryTreeCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
	}

}




/******* S.D.G. *******/



