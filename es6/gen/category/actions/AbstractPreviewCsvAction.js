/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import PreviewCsvCommand from "../../../src/category/commands/PreviewCsvCommand";

export default class AbstractPreviewCsvAction extends Action {

    constructor( csv) {
        super({csv}, 'category.PreviewCsvAction');
	}
		
	getCommand() {
		return new PreviewCsvCommand(this.actionData);
	}


}




/******* S.D.G. *******/



