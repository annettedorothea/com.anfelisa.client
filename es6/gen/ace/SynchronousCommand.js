/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import * as ACEController from "./ACEController";
import Command from "./Command";

export default class SynchronousCommand extends Command {
    executeCommand(data) {
		this.initCommandData(data);
        ACEController.addItemToTimeLine({
			command: {
				commandName: this.commandName,
				data
			}
        });
	    data = this.execute(data);
		this.publishEvents(data);
    }

}




/******* S.D.G. *******/





