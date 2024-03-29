/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(data, resolve) {
        if (data.filterNonScheduled) {
            this.addFilterOutcome(data);
        } else {
            this.addNoFilterOutcome(data);
        }
    	resolve(data);
    }
    handleError(data, resolve, reject) {
    	reject(data.error);
    }
}




/******* S.D.G. *******/



