/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDisplaySaveBugDialogCommand from "../../../gen/common/commands/AbstractDisplaySaveBugDialogCommand";

export default class DisplaySaveBugDialogCommand extends AbstractDisplaySaveBugDialogCommand {
    execute(data) {
        data.display = true;
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



