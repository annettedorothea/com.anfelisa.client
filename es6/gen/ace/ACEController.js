/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AppUtils from "../../src/app/AppUtils";
import Utils from "./Utils";
import * as AppState from "./AppState";

export default class ACEController {

    static init() {
        ACEController.timeline = [];
        ACEController.listeners = {};
        ACEController.factories = {};
        ACEController.registerListener('TriggerAction', ACEController.triggerAction);
        ACEController.actionQueue = [];
    }

    static registerListener(eventName, listener) {
        if (!eventName.trim()) {
            throw new Error('cannot register listener for empty eventName');
        }
        if (!listener) {
            throw new Error('cannot register undefined listener for event ' + eventName);
        }
        let listenersForEventName;
        if (ACEController.listeners[eventName] === undefined) {
            ACEController.listeners[eventName] = [];
        }
        listenersForEventName = ACEController.listeners[eventName];
        listenersForEventName.push(listener);
    }

    static registerFactory(eventName, factory) {
        if (!eventName.trim()) {
            throw new Error('cannot register factory for empty eventName');
        }
        if (!factory) {
            throw new Error('cannot register undefined factory for event ' + eventName);
        }
        ACEController.factories[eventName] = factory;
    }

    static addItemToTimeLine(item) {
	    ACEController.timeline.push(AppUtils.deepCopy(item));
		if (ACEController.timeline.length > Utils.settings.timelineSize) {
		    ACEController.timeline.shift();
		    while (ACEController.timeline.length > 0 && ACEController.timeline.length > 0 && !ACEController.timeline[0].appState) {
		        ACEController.timeline.shift();
		    }
		}
    }

    static addActionToQueue(action) {
		ACEController.actionQueue.push(action);
	    ACEController.applyNextActions();
    }

    static applyNextActions() {
        let action = ACEController.actionQueue.shift();
        if (action) {
	    	ACEController.addItemToTimeLine({appState: AppState.getAppState()});
			if (action.asynchronous) {
			    action.applyAction().then(() => {
			    	ACEController.callApplyNextActions();
			    }, (error) => {
			        AppUtils.displayUnexpectedError(error);
			    	ACEController.callApplyNextActions();
			    });
			} else {
				try {
					action.applyAction();
			    	ACEController.callApplyNextActions();
				} catch(error) {
			        AppUtils.displayUnexpectedError(error);
			    	ACEController.callApplyNextActions();
				}
			}
        }
    }
    
    static callApplyNextActions() {
		ACEController.applyNextActions();
    }

    static triggerAction(action) {
        ACEController.addActionToQueue(action);
    }

    static startReplay(timeline, pauseInMillis) {
	    AppUtils.startReplay();

        let events = [];
		
		let appStateWasSet = false;
        for (let i = 0; i < timeline.length; i++) {
            let item = timeline[i];
            if (item.event && appStateWasSet && item.event.eventName !== "TriggerAction") {
                const eventData = item.event.eventData;
                let event = ACEController.factories[item.event.eventName](eventData);
                events.push(event);
            }
			if (item.appState && !appStateWasSet) {
			    AppState.setInitialAppState(item.appState);
			    appStateWasSet = true;
			}
            
        }

		setTimeout(() => ACEController.replayNextEvent(events, pauseInMillis), pauseInMillis);
    }
    
    static replayNextEvent(events, pauseInMillis) {
        let event = events.shift();
        if (event) {
        	event.replay();
        	setTimeout(() => ACEController.replayNextEvent(events, pauseInMillis), pauseInMillis);
	    } else {
	        setTimeout(() => ACEController.finishReplay(), pauseInMillis);
	    }
	}
	
	static finishReplay() {
	    console.log("replay finished");
	    ACEController.timeline = [];
	    ACEController.actionQueue = [];
	    AppUtils.createInitialAppState();
	    AppUtils.startApp();
	}


}

ACEController.init();




/******* S.D.G. *******/




