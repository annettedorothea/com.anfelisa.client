/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/


import * as AppUtils from "./AppUtils";
import * as AppState from "./AppState";
import {replayTimeline, saveTimeline, dumpTimeline} from "../gen/ace/Timeline";

export function dumpAppState() {
    console.info(AppState.get([]));
}

AppUtils.initEventListeners();
AppUtils.startApp();
AppUtils.renderApp();





window.Anfelisa = {
    dumpAppState,
    replayTimeline,
    saveTimeline,
    dumpTimeline,
    getValueFromLocalStorage: AppUtils.getValueFromLocalStorage,
    getAppState: AppUtils.getAppState,
    addSquishyValueClient: AppUtils.addSquishyValueClient,
    addSquishyValueServer: AppUtils.addSquishyValueServer
}


/******* S.D.G. *******/




