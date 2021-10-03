/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCategoryCommand from "../../../src/category/commands/UpdateCategoryCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUpdateCategoryAction extends Action {

    constructor(callback) {
        super('category.UpdateCategoryAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCategoryCommand();
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



