/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/


import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";
import {Texts} from "../../app/Texts";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(data, resolve) {
        this.addOkOutcome(data);
        if (data.intervalDifference > 0) {
            this.addShowWarningToastOutcome(data);
            if (data.intervalDifference === 1) {
                if (data.maxCardsPerDay === 1) {
                    data.textKey = Texts.messages.intervalOffsetPostponedSingularSingular;
                } else {
                    data.textKey = Texts.messages.intervalOffsetPostponedSingularPlural;
                    data.args = [data.maxCardsPerDay];
                }
            } else if (data.intervalDifference > 1) {
                if (data.maxCardsPerDay === 1) {
                    data.textKey = Texts.messages.intervalOffsetPostponedPluralSingular;
                    data.args = [data.intervalDifference];
                } else {
                    data.textKey = Texts.messages.intervalOffsetPostponedPluralPlural;
                    data.args = [data.intervalDifference, data.maxCardsPerDay];
                }
            }
        } else if (data.intervalDifference < 0) {
            this.addShowInfoToastOutcome(data)
            if (data.intervalDifference === -1) {
                if (data.maxInterval === 1) {
                    data.textKey = Texts.messages.intervalOffsetMovedForwardSingularSingular;
                } else {
                    data.textKey = Texts.messages.intervalOffsetMovedForwardSingularPlural;
                    data.args = [data.maxInterval];
                }
            } else if (data.intervalDifference < -1) {
                if (data.maxInterval === 1) {
                    data.textKey = Texts.messages.intervalOffsetMovedForwardPluralSingular;
                    data.args = [data.intervalDifference * (-1)];
                } else {
                    data.textKey = Texts.messages.intervalOffsetMovedForwardPluralPlural;
                    data.args = [data.intervalDifference * (-1), data.maxInterval];
                }
            }
        }
        resolve(data);
    }

    handleError(data, resolve, reject) {
        reject(data.error);
    }
}


/******* S.D.G. *******/



