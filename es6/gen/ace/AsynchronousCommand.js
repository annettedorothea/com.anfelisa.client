/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/





import * as ACEController from "./ACEController";
import Command from "./Command";

export default class AsynchronousCommand extends Command {
    executeCommand(data) {
		this.initCommandData(data);
        ACEController.addItemToTimeLine({
			command: {
				commandName: this.commandName,
				data
			}
        });
        return new Promise((resolve, reject) => {
			if (this.validateCommandData(data)) {
			    this.execute(data).then((data) => {
			        this.publishEvents(data);
			        resolve();
			    }, (error) => {
			        reject(error);
			    });
			} else {
		        this.publishEvents(data);
				resolve();
			}
        });
    }

    validateCommandData() {
    	return true;
    }

}




/******* S.D.G. *******/





