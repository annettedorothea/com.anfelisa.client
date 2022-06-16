/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractEmailChangedCommand from "../../../gen/registration/commands/AbstractEmailChangedCommand";

export default class EmailChangedCommand extends AbstractEmailChangedCommand {
    execute(data) {
        data.emailInvalid = /(.+)@(.+){2,}\.(.+){2,}/.test(data.value) === false;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



