/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import GetInvitedUsernamesAction from "../../../src/category/actions/GetInvitedUsernamesAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractInviteUserClickCommand extends SynchronousCommand {
    constructor() {
        super("category.InviteUserClickCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.InviteUserClickOkEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new GetInvitedUsernamesAction(), 
					{
					}
			)
		}
    }
}




/******* S.D.G. *******/



