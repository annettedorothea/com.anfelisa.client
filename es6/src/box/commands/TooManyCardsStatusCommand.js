/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractTooManyCardsStatusCommand from "../../../gen/box/commands/AbstractTooManyCardsStatusCommand";

export default class TooManyCardsStatusCommand extends AbstractTooManyCardsStatusCommand {
    execute(data) {
        if (data.maxInterval === "" || data.maxCardsPerDay === "" || !data.allActiveCards || data.allActiveCards === 0) {
            data.tooManyCardsStatus = 0;
        } else if (data.maxCardsPerDay && data.allActiveCards > data.maxCardsPerDay * data.maxInterval) {
            data.tooManyCardsStatus = 2;
        } else {
            data.tooManyCardsStatus = 1;
        }
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



