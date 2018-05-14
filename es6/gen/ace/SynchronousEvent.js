import ACEController from "./ACEController";
import Event from "./Event";


export default class SynchronousEvent extends Event {

    publish() {
        this.prepareDataForView();
        if (this.eventName !== "TriggerAction") {
            this.eventData.notifiedListeners = this.getNotifiedListeners();
        }
        ACEController.addItemToTimeLine({event: this});
        this.notifyListeners();
    }

    notifyListeners() {
        let i, listener;
        if (this.eventName !== undefined) {
            const listenersForEvent = ACEController.listeners[this.eventName];
            if (listenersForEvent !== undefined) {
                for (i = 0; i < listenersForEvent.length; i += 1) {
                    listener = listenersForEvent[i];
                    listener(this.eventData);
                }
            }
        }
    }

}

/*       S.D.G.       */

