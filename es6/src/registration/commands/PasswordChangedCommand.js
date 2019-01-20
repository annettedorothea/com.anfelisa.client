import AbstractPasswordChangedCommand from "../../../gen/registration/commands/AbstractPasswordChangedCommand";

export default class PasswordChangedCommand extends AbstractPasswordChangedCommand {
    execute() {
        this.commandData.passwordMismatch = this.commandData.password !== this.commandData.passwordRepetition;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
