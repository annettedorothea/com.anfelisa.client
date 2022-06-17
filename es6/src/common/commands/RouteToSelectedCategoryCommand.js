/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import AbstractRouteToSelectedCategoryCommand from "../../../gen/common/commands/AbstractRouteToSelectedCategoryCommand";

export default class RouteToSelectedCategoryCommand extends AbstractRouteToSelectedCategoryCommand {
    execute(data) {
    	this.addOkOutcome(data);
        data.hash = `#categories/${data.rootCategoryId}/${data.categoryId}`
    	return data;
    }
}




/******* S.D.G. *******/



