/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/





import Action from "./Action";
import * as ACEController from "./ACEController";
import * as AppState from "../../src/AppState";
import * as AppUtils from "../../src/AppUtils";

export default class AsynchronousAction extends Action {

    constructor(actionName, callback) {
        super(actionName, callback);
        this.asynchronous = true;
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
					ACEController.addItemToTimeLine({
						error: {
							error
						}
					});
                    AppUtils.displayUnexpectedError(error);
                }
            );
        });
    }

    applyAction(data) {
        return new Promise((resolve, reject) => {
            this.preCall();
            data = this.initActionData(data);
            let command = this.getCommand();
            command.executeCommand(data, this.postCall).then(() => {
                resolve();
            }, (error) => {
                this.postCall();
                reject(error);
            });
        });
    }

    preCall() {
    }

    postCall() {
    }

}




/******* S.D.G. *******/




