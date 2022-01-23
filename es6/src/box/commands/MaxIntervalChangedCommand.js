/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractMaxIntervalChangedCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedCommand";

export default class MaxIntervalChangedCommand extends AbstractMaxIntervalChangedCommand {
    execute(data) {
        if (data.maxInterval) {
            data.maxIntervalInvalid = isNaN(data.maxInterval)
                || data.maxInterval % 1 !== 0
                || data.maxInterval <= 0;
        } else {
            data.maxIntervalInvalid = false;
        }
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



