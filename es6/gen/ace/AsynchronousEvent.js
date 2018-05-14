import ACEController from "./ACEController";
import Event from "./Event";

export default class AsynchronousEvent extends Event {
    publish() {
        return new Promise((resolve, reject) => {
            this.prepareDataForView();
            if (this.eventName !== "TriggerAction") {
                this.eventData.notifiedListeners = this.getNotifiedListeners();
            }
            ACEController.addItemToTimeLine({event: this});
            Promise.all(this.notifyListeners()).then(() => {
                resolve();
            }, (error) => {
                reject(error + "\n" + this.eventName);
            });
        });
    }

    notifyListeners() {
        let promises = [];
        let i, listener;
        if (this.eventName !== undefined) {
            const listenersForEvent = ACEController.listeners[this.eventName];
            if (listenersForEvent !== undefined) {
                for (i = 0; i < listenersForEvent.length; i += 1) {
                    listener = listenersForEvent[i];
                    promises.push(listener(this.eventData));
                }
            }
        }
        return promises;
    }

}

/*       S.D.G.       */

