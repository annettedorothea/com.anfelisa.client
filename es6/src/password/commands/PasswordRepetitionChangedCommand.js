/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractPasswordRepetitionChangedCommand from "../../../gen/password/commands/AbstractPasswordRepetitionChangedCommand";

export default class PasswordRepetitionChangedCommand extends AbstractPasswordRepetitionChangedCommand {
    execute(data) {
        data.passwordMismatch = data.password !== data.value;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



