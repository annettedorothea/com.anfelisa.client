/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AbstractHideToastCommand from "../../../gen/common/commands/AbstractHideToastCommand";

export default class HideToastCommand extends AbstractHideToastCommand {
    execute() {
    	this.addOkOutcome();
		const index = this.commandData.messages.findIndex(i => i.id === this.commandData.id);
		if (index >= 0) {
			this.commandData.messages[index].visible = false;
        }
    }
}




/******* S.D.G. *******/


