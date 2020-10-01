/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import ACEController from "./ACEController";
import Action from "./Action";
import AppUtils from "../../src/app/AppUtils";

export default class SynchronousAction extends Action {

    constructor(actionData, actionName) {
    	super(actionData, actionName);
    	   this.asynchronous = false;
    }

    applyAction() {
        this.actionData.uuid = AppUtils.createUUID();
		this.actionData.clientSystemTime = new Date();
        this.initActionData();
	    ACEController.addItemToTimeLine({action: this});
	    let command = this.getCommand();
	    command.executeCommand();
	    AppUtils.renderNewState();
    }
}




/******* S.D.G. *******/




