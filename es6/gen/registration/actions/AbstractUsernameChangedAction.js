import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/registration/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor( username) {
        super({username}, 'registration.UsernameChangedAction');
    }
    
	getCommand() {
		return new UsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
