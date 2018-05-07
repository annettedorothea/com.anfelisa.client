import AbstractWantedOfNewCardChangedCommand from "../../../gen/author/commands/AbstractWantedOfNewCardChangedCommand";

export default class WantedOfNewCardChangedCommand extends AbstractWantedOfNewCardChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.wanted = this.commandParam.wanted;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
