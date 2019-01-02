import Action from "../../ace/SynchronousAction";
import DeleteBoxClickCommand from "../../../src/box/commands/DeleteBoxClickCommand";

export default class AbstractDeleteBoxClickAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.DeleteBoxClickAction');
    }
    
	getCommand() {
		return new DeleteBoxClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
