/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractRouteToQueryCardsCommand from "../../../gen/common/commands/AbstractRouteToQueryCardsCommand";

export default class RouteToQueryCardsCommand extends AbstractRouteToQueryCardsCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.hash = `#box/${data.boxId}`
    	return data;
    }
}




/******* S.D.G. *******/


