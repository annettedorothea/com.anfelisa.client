/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDisplayVersionMismatchDialogCommand from "../../../gen/common/commands/AbstractDisplayVersionMismatchDialogCommand";

export default class DisplayVersionMismatchDialogCommand extends AbstractDisplayVersionMismatchDialogCommand {
    execute(data) {
        data.display = true;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



