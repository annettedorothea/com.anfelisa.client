/********************************************************************************
 * generated by de.acegen 1.6.3
 ********************************************************************************/




import * as ACEController from "./ACEController";

export default class TriggerAction {

	publish(action, data) {
		ACEController.addItemToTimeLine({
            event: {
                eventName: 'TriggerAction',
                action: {
                	actionName: action.actionName,
                	data
                }
            }
        });
		ACEController.addActionToTriggeredActionsQueue(action, data);
	}
	
	publishWithDelay(action, data, delayInMillis) {
    	setTimeout(() => {
    		this.publish(action, data);
		}, delayInMillis);
	}

	publishWithDelayTakeLatest(action, data, delayInMillis) {
		const existingTimeout = ACEController.delayedActions[action.actionName];
		if (existingTimeout) {
			clearTimeout(existingTimeout);
		}
		ACEController.delayedActions[action.actionName] = setTimeout(() => {
			ACEController.delayedActions[action.actionName] = undefined;
    		this.publish(action, data);
		}, delayInMillis);
	}

}




/******* S.D.G. *******/




