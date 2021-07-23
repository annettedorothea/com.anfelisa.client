/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute(data) {
        data.loggedInUser = {
            username: data.username,
            password: data.password,
            role: data.role
        };
        if (data.saveInLocalStorage === true) {
            this.addSaveInLocalStorageOutcome(data);
        } else {
            data.username = undefined;
            data.password = undefined;
            this.addDoNotSaveInLocalStorageOutcome(data);
        }
    	return data;
    }
}




/******* S.D.G. *******/



