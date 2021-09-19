/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateRootCategoryCommand from "../../../src/box/commands/CreateRootCategoryCommand";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractCreateRootCategoryAction extends Action {

    constructor() {
        super('box.CreateRootCategoryAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateRootCategoryCommand();
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



