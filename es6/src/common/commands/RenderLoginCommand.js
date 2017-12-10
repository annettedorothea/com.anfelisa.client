import AbstractRenderLoginCommand from "../../../gen/common/commands/AbstractRenderLoginCommand";

export default class RenderLoginCommand extends AbstractRenderLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */