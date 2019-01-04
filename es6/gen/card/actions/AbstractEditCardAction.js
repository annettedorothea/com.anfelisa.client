import Action from "../../ace/SynchronousAction";
import EditCardCommand from "../../../src/card/commands/EditCardCommand";

export default class AbstractEditCardAction extends Action {

    constructor( cardId) {
        super({cardId}, 'card.EditCardAction');
    }
    
	getCommand() {
		return new EditCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
