/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/


import AbstractCallSaveBugCommand from "../../../gen/common/commands/AbstractCallSaveBugCommand";
import {saveTimeline} from "../../../gen/ace/Timeline";

export default class CallSaveBugCommand extends AbstractCallSaveBugCommand {

    execute(data) {
        return new Promise((resolve) => {
            saveTimeline("unknown user interaction", data.username);
            this.addOkOutcome(data);
            resolve(data);
        });
    }
}


/******* S.D.G. *******/



