/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SwapPreviewCsvCommand from "../../../src/category/commands/SwapPreviewCsvCommand";

export default class AbstractSwapPreviewCsvAction extends Action {

    constructor() {
        super({}, 'category.SwapPreviewCsvAction');
	}
		
	getCommand() {
		return new SwapPreviewCsvCommand(this.actionData);
	}


}




/******* S.D.G. *******/



