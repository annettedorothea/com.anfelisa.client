/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




import AbstractFilterActiveCardListCommand from "../../../gen/box/commands/AbstractFilterActiveCardListCommand";

export default class FilterActiveCardListCommand extends AbstractFilterActiveCardListCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.activeCardList.forEach((item) => {
            if (data.selectedLastQualityFilters.indexOf(item.lastQuality) >= 0) {
                item.hide = false;
            } else {
                item.hide = data.selectedLastQualityFilters.length > 0;
            }
        });
    	return data;
    }
}




/******* S.D.G. *******/


