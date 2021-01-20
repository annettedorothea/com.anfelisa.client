/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractCreateReverseBoxCommand from "../../../gen/category/commands/AbstractCreateReverseBoxCommand";

export default class CreateReverseBoxCommand extends AbstractCreateReverseBoxCommand {

    validateCommandData() {
    	//this.commandData.boxId is mandatory String
    	return true;
    }

    handleResponse(resolve) {
    	this.addOkOutcome();
    	this.commandData.hash = "#dashboard"
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/



