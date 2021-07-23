/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDisplayWantedCommand from "../../../gen/box/commands/AbstractDisplayWantedCommand";

export default class DisplayWantedCommand extends AbstractDisplayWantedCommand {
    execute(data) {
        data.index += 1;
        if (data.wantedItemsLength <= data.index) {
            if (data.image && data.wantedItemsLength + 1 === data.index) {
                data.displayImage = true;
                data.enableScoreButtons = true;
            } else {
                data.enableScoreButtons = true;
            }
        }
        this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



