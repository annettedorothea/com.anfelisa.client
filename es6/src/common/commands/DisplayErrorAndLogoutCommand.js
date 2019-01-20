import AbstractDisplayErrorAndLogoutCommand from "../../../gen/common/commands/AbstractDisplayErrorAndLogoutCommand";
import * as AppState from "../../../gen/ace/AppState";

export default class DisplayErrorAndLogoutCommand extends AbstractDisplayErrorAndLogoutCommand {
    execute() {
        const texts = AppState.get_state_State_texts();
        const language = AppState.get_state_State_language();
        const text = texts.errors[this.commandData.error.errorKey] && texts.errors[this.commandData.error.errorKey][language] ?
            texts.errors[this.commandData.error.errorKey][language] : texts.errors["unknownError"][language].replace("{0}", this.commandData.error.errorKey);
        this.commandData.message = {
            type: "error",
            text
        };
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
