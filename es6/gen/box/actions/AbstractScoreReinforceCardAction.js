/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor() {
        super('box.ScoreReinforceCardAction');
	}
		
	getCommand() {
		return new ScoreReinforceCardCommand();
	}


}




/******* S.D.G. *******/



