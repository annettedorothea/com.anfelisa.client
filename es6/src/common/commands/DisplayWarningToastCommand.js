/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractDisplayWarningToastCommand from "../../../gen/common/commands/AbstractDisplayWarningToastCommand";
import {pushMessage} from "./DisplayToastCommand";

export default class DisplayWarningToastCommand extends AbstractDisplayWarningToastCommand {
    execute(data) {
        pushMessage(data, "warning");
        this.addOkOutcome(data);
        return data;
    }
}




/******* S.D.G. *******/


