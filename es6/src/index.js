/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/





import * as AppUtils from "./app/AppUtils";
import * as AppState from "../gen/ace/AppState";
import * as ACEController from "../gen/ace/ACEController";

export * from "../gen/ace/Timeline";

export function dumpAppState() {
    console.info(AppState.getAppState());
}

AppUtils.createInitialAppState();
ACEController.addItemToTimeLine({
	appState: AppState.getAppState()
});
AppUtils.initEventListeners();
AppUtils.startApp();
AppUtils.renderApp();

// for Selenium tests
export function getAppState() {
    return AppState.getAppState();
}

export function addSquishyValueClient(value) {
    let squishyValues = JSON.parse(localStorage.getItem('squishyValues'));
    if (!squishyValues) {
        squishyValues = [];
    }
    squishyValues.push(value);
    localStorage.setItem('squishyValues', JSON.stringify(squishyValues));
}

export function addSquishyValueServer(uuid, key, value) {
    return new Promise(() => {
        let url = "";
        if (key === "system-time") {
            url =`/api/test/squishy/system-time?uuid=${uuid}&system-time=${value}`;
        } else {
            url =`/api/test/squishy/value?uuid=${uuid}&key=${key}&value=${value}`
        }
        return new Promise((resolve, reject) => {
            AppUtils.httpPut(url).then(() => {
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    })
}

export function getValueFromLocalStorage(key) {
    return localStorage.getItem(key);
}




/******* S.D.G. *******/



