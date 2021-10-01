/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import MoveCategoryCommand from "../../../src/category/commands/MoveCategoryCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractMoveCategoryAction extends Action {

    constructor() {
        super('category.MoveCategoryAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new MoveCategoryCommand();
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



