/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateCategoryCommand from "../../../src/category/commands/CreateCategoryCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractCreateCategoryAction extends Action {

    constructor(callback) {
        super('category.CreateCategoryAction', callback);
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateCategoryCommand();
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



