import AbstractPostponeCardsOfBoxCommand from "../../../gen/box/commands/AbstractPostponeCardsOfBoxCommand";

export default class PostponeCardsOfBoxCommand extends AbstractPostponeCardsOfBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpPut("api/cards/postpone", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
