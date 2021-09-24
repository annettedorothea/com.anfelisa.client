/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute(data) {
        data.language = "de";
        data.messages = [];
        this.addOkOutcome(data);
        if (data.token) {
            this.addUserOutcome(data);
        } else {
            this.addNoUserOutcome(data);
        }
    	return data;
    }
}




/******* S.D.G. *******/



