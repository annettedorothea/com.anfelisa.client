/********************************************************************************
 * generated by de.acegen 0.9.13
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
	    ACEController.addItemToTimeLine({action: this});
        this.actionData.uuid = AppUtils.createUUID();
		this.actionData.clientSystemTime = new Date();
        this.initActionData();
	    let command = this.getCommand();
	    command.executeCommand();
	    AppUtils.renderNewState();
    }
}




/******* S.D.G. *******/




