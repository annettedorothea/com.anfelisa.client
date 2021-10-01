/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCategoryCommand from "../../../src/category/commands/UpdateCategoryCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUpdateCategoryAction extends Action {

    constructor() {
        super('category.UpdateCategoryAction');
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



