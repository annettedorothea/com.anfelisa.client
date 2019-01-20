import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";
import {getState} from "../../../gen/ace/AppState";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    initCommandData() {
        const data = getState().data.cardView;
        this.commandData.cardIds = data.selectedCardIds;
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
