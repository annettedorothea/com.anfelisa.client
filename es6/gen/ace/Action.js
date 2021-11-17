/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/





import * as ACEController from "./ACEController";
import * as AppUtils from "../../src/AppUtils";
import * as AppState from "../../src/AppState";

export default class Action {

    constructor(actionName) {
        this.actionName = actionName;
    }
    
    initSquishy(data) {
		if (AppUtils.settings.mode === "dev") {
		    AppUtils.readSquishyValuesClient(data);
		} else {
		    data.uuid = AppUtils.createUUID();
		    data.clientSystemTime = new Date();
		}
    }
    
    apply(data) {
        return new Promise((resolve) => {
            ACEController.addItemToTimeLine({
                appState: AppState.get([])
            });
            ACEController.addItemToTimeLine({
                action: {
                    actionName: this.actionName,
                    data
                }
            });
			this.initSquishy(data);
			this.applyAction(data).then(
			    resolve,
			    (error) => {
			        AppUtils.displayUnexpectedError(error);
			    }
			);
        });
    }

    applyAction(data) {
    }
    
}





/******* S.D.G. *******/




