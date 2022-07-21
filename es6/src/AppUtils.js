// noinspection JSUnresolvedVariable

/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/


import * as App from "./index";
import * as AppState from "./AppState";

import EventListenerRegistrationCategory from "../gen/category/EventListenerRegistration";
import EventListenerRegistrationCard from "../gen/card/EventListenerRegistration";
import EventListenerRegistrationBox from "../gen/box/EventListenerRegistration";
import EventListenerRegistrationCommon from "../gen/common/EventListenerRegistration";
import EventListenerRegistrationProfile from "../gen/profile/EventListenerRegistration";
import EventListenerRegistrationRegistration from "../gen/registration/EventListenerRegistration";
import EventListenerRegistrationLogin from "../gen/login/EventListenerRegistration";
import EventListenerRegistrationPassword from "../gen/password/EventListenerRegistration";
import {
    displaySaveBugDialog,
    displayErrorToast,
    displayVersionMismatchDialog,
    displayVersionMismatchErrorDialog,
    init,
    routeChanged,
} from "../gen/common/ActionFunctions";
import {dumpTimeline} from "../gen/ace/Timeline";
import React from "react";
import {createRoot} from "react-dom/client";
import * as R from 'ramda'
import {Texts} from "./app/Texts";
import {RootContainerContainer} from "../gen/components/RootContainerContainer";
import {initBoxesForDay, initBoxesForDayDuringScore} from "../gen/box/ActionFunctions";

export let settings;

function loadSettings() {
    return httpGet("settings.json").then((loadedSettings) => {
        settings = loadedSettings;
        if (!settings.clientVersion) {
            settings.clientVersion = "";
        }
        if (!settings.aceScenariosApiKey) {
            settings.aceScenariosApiKey = "";
        }
        if (!settings.aceScenariosBaseUrl) {
            settings.aceScenariosBaseUrl = "";
        }
        if (!settings.rootPath) {
            settings.rootPath = "";
        }
        if (!settings.timelineSize) {
            settings.timelineSize = 0;
        }
        if (!settings.mode) {
            settings.mode = "live";
        }
        if (settings.rootPath.startsWith("/")) {
            settings.rootPath = settings.rootPath.substring(1);
        }
        if (settings.rootPath.endsWith("/")) {
            settings.rootPath = settings.rootPath.substring(0, settings.rootPath.length - 1);
        }
    });
}

export function initEventListeners() {
    EventListenerRegistrationCategory.init();
    EventListenerRegistrationCard.init();
    EventListenerRegistrationBox.init();
    EventListenerRegistrationCommon.init();
    EventListenerRegistrationProfile.init();
    EventListenerRegistrationRegistration.init();
    EventListenerRegistrationLogin.init();
    EventListenerRegistrationPassword.init();
}

const versionCheck = () => {
    const currentVersion = settings.clientVersion;
    loadActualClientVersion().then((actualClientVersion) => {
        if (actualClientVersion !== currentVersion) {
            displayVersionMismatchDialog();
        }
    });
}

export function startApp() {
    window.onhashchange = () => {
        routeChanged();
        window.scrollTo(0, 0);
    };
    loadSettings().then(() => {
        init(location.hash, localStorage.getItem("username"), localStorage.getItem("password"));
    });
    const versionCheckInterval = 300 * 1000;
    let versionCheckId = setInterval(versionCheck, versionCheckInterval);
    document.onvisibilitychange = () => {
        if (document.visibilityState === 'visible') {
            versionCheck();
            versionCheckId = setInterval(versionCheck, versionCheckInterval);
            const boxList = AppState.get(["rootContainer", "mainView", "dashboardView", "boxList"]);
            const nextCard = AppState.get(["rootContainer", "mainView", "queryCardView", "nextCard"]);
            if (boxList) {
                initBoxesForDay().then();
            } else if (nextCard) {
                initBoxesForDayDuringScore().then();
            }
        } else {
            clearInterval(versionCheckId)
        }
    }
}

function loadActualClientVersion() {
    return httpRequest("GET", "settings.json").then((settings) => {
        return settings.clientVersion;
    })
}

export function startReplay() {
    window.onhashchange = () => {
    };
}

function createHeaders(authorize) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    if (authorize === true) {
        let authorization = oAuth();
        if (authorization !== undefined) {
            headers.append("Authorization", authorization);
        }
    }
    return headers;
}

function addUuidToUrl(url, uuid) {
    if (uuid) {
        if (url.indexOf("?") < 0) {
            url += "?uuid=" + uuid;
        } else {
            url += "&uuid=" + uuid;
        }
    }
    return url;
}

function httpRequest(methodType, url, uuid, authorize, data) {
    return new Promise((resolve, reject) => {
        const options = {
            method: methodType,
            headers: createHeaders(authorize),
            mode: 'cors',
            cache: 'no-cache'
        };
        if (data && methodType !== "GET") {
            options.body = JSON.stringify(data);
        }
        url = addUuidToUrl(url, uuid);
        const request = new Request(url, options);

        fetch(request).then(function (response) {
            response.text().then((text) => {
                if (response.status >= 300) {
                    const error = createError(text, response.statusText, response.status);
                    reject(error);
                } else {
                    let data = {};
                    if (text.length > 0) {
                        data = JSON.parse(text);
                    }
                    resolve(data);
                }
            });
        }).catch(function (error) {
            reject(createError(error, error));
        });
    });
}

export function httpGet(url, uuid, authorize) {
    return httpRequest("GET", url, uuid, authorize, null);
}

export function httpPost(url, uuid, authorize, data) {
    return httpRequest("POST", url, uuid, authorize, data);
}

export function httpPut(url, uuid, authorize, data) {
    return httpRequest("PUT", url, uuid, authorize, data);
}

export function httpDelete(url, uuid, authorize, data) {
    return httpRequest("DELETE", url, uuid, authorize, data);
}

function oAuth() {
    const token = AppState.get(["rootContainer", "loggedInUser", "token"]);
    if (token !== undefined) {
        return "Bearer " + token;
    }
    return undefined;
}

export function createUUID() {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export function displayUnexpectedError(error) {
    console.error("unexpected error", error);
    const currentVersion = settings.clientVersion;
    App.dumpAppState();
    dumpTimeline();
    loadActualClientVersion().then((actualClientVersion) => {
        if (actualClientVersion !== currentVersion) {
            displayVersionMismatchErrorDialog();
        } else {
            displayErrorToast(Texts.messages.unknownError, [error.textKey ? error.textKey : error]);
            displaySaveBugDialog();
        }
    });
}

export function deepCopy(object) {
    return R.clone(object);
}

export function renderApp() {
    const rootContainer = document.getElementById('root');
    const root = createRoot(rootContainer);
    root.render(<RootContainerContainer {...AppState.appState} />);
}

export function createError(textKey, text, code) {
    return {
        code,
        text,
        textKey: code && code === 401 ? "loginFailed" : textKey,
    }
}

export function translate(path, args) {
    let language = AppState.get(["rootContainer", "language"]);
    if (!language) {
        language = "de";
    }
    const value = path[language]
    if (!value) {
        return path
    }
    return value.replace(/{([0-9]+)}/g, function (match, index) {
        return typeof args[index] == 'undefined' ? match : args[index];
    });
}

export function isUnauthorized(message) {
    return (message && message.code && message.code === 401);
}


// for Selenium tests

export function addSquishyValueServer(uuid, key, value) {
    return new Promise(() => {
        let url = "";
        if (key === "system-time") {
            url = `/api/test/squishy/system-time?uuid=${uuid}&system-time=${value}`;
        } else {
            url = `/api/test/squishy/value?uuid=${uuid}&key=${key}&value=${value}`
        }
        return new Promise((resolve, reject) => {
            httpPut(url).then(() => {
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    })
}

const squishyClientValues = [];

export function addSquishyValueClient(value) {
    squishyClientValues.push(JSON.parse(value));
}

export function readSquishyValuesClient(data) {
    const squishyValue = squishyClientValues.shift();
    if (squishyValue) {
        data.uuid = squishyValue.uuid;
        data.clientSystemTime = squishyValue.clientSystemTime;
    }
    if (!data.uuid) {
        data.uuid = createUUID();
    }
    if (!data.clientSystemTime) {
        data.clientSystemTime = new Date();
    }
}

export function getValueFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function getAppState() {
    return AppState.get([])
}


/******* S.D.G. *******/



