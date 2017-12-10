import AbstractShowFalseMultipleChoiceCommand from "../../../gen/multiplechoice/commands/AbstractShowFalseMultipleChoiceCommand";

export default class ShowFalseMultipleChoiceCommand extends AbstractShowFalseMultipleChoiceCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.itemId = this.commandParam.itemId;
            this.commandData.multipleChoiceId = this.commandParam.multipleChoiceId;
            this.commandData.last = this.commandParam.last;
            if (this.commandParam.last === true) {
                this.commandData.outcome = this.last;
            } else {
                this.commandData.outcome = this.notLast;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */