/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        if (data.saveInLocalStorage === true) {
            this.addSaveInLocalStorageOutcome(data);
        }
        this.addOkOutcome(data);
    	resolve(data);
    }
    handleError(data, resolve) {
        this.addUnauthorizedOutcome(data);
        resolve(data);
    }
}




/******* S.D.G. *******/



