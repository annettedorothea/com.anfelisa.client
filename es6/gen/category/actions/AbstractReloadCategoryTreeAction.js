/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ReloadCategoryTreeCommand from "../../../src/category/commands/ReloadCategoryTreeCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractReloadCategoryTreeAction extends Action {

    constructor(callback) {
        super('category.ReloadCategoryTreeAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ReloadCategoryTreeCommand();
	}

	preCall() {
		AppUtils.set(
			{display: true}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}
	
	postCall() {
		AppUtils.set(
			{display: false}, 
			["rootContainer", "spinner", "display"], 
			[]
		)
		AppUtils.stateUpdated();
	}

}




/******* S.D.G. *******/



