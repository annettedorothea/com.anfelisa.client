/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/





import * as ACEController from "./ACEController";
import * as AppUtils from "../../src/AppUtils";
import * as AppState from "../../src/AppState";

export default class Action {

    constructor(actionName, callback) {
        this.actionName = actionName;
        this.callback = callback;
    }

    apply(data) {
		ACEController.addItemToTimeLine({
		    appState: AppState.get([])
		});
        ACEController.addItemToTimeLine({
            action: {
                actionName: this.actionName,
                data
            }
        });
        if (AppUtils.settings.mode === "dev" && localStorage) {
			let squishyValues = JSON.parse(localStorage.getItem("squishyValues"));
			if (squishyValues && squishyValues.length > 0) {
			    const squishyValue = JSON.parse(squishyValues.shift());
			    if (squishyValue) {
			        data.uuid = squishyValue.uuid;
			        data.clientSystemTime = squishyValue.clientSystemTime;
			    }
			    localStorage.setItem('squishyValues', JSON.stringify(squishyValues));
			}
			if (!data.uuid) {
			    data.uuid = AppUtils.createUUID();
			}
			if (!data.clientSystemTime) {
			    data.clientSystemTime = new Date();
			}
        } else {
            data.uuid = AppUtils.createUUID();
            data.clientSystemTime = new Date();
        }
        ACEController.addActionToQueue({
            action: this,
            data
        });
    }
    
}




/******* S.D.G. *******/




