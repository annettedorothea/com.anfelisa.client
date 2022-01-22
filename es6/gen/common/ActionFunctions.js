/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import InitAction from "../../src/common/actions/InitAction";
import GetUserInfoAction from "../../src/common/actions/GetUserInfoAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayToastAction from "../../src/common/actions/DisplayToastAction";
import HideToastAction from "../../src/common/actions/HideToastAction";
import DestroyToastAction from "../../src/common/actions/DestroyToastAction";
import DisplaySaveBugDialogAction from "../../src/common/actions/DisplaySaveBugDialogAction";
import DisplayVersionMismatchDialogAction from "../../src/common/actions/DisplayVersionMismatchDialogAction";
import CancelVersionMismatchDialogAction from "../../src/common/actions/CancelVersionMismatchDialogAction";
import DisplayVersionMismatchErrorDialogAction from "../../src/common/actions/DisplayVersionMismatchErrorDialogAction";
import CallSaveBugAction from "../../src/common/actions/CallSaveBugAction";
import CancelSaveBugDialogAction from "../../src/common/actions/CancelSaveBugDialogAction";
import HideSaveBugDialogAction from "../../src/common/actions/HideSaveBugDialogAction";

export function init() {
    return new InitAction().apply({});
}

export function getUserInfo(token) {
    return new GetUserInfoAction().apply({token});
}

export function routeChanged() {
    return new RouteChangedAction().apply({});
}

export function route(hash) {
    return new RouteAction().apply({hash});
}

export function logout() {
    return new LogoutAction().apply({});
}

export function displayToast(message, error, warning) {
    return new DisplayToastAction().apply({message, error, warning});
}

export function hideToast(id) {
    return new HideToastAction().apply({id});
}

export function destroyToast(id) {
    return new DestroyToastAction().apply({id});
}

export function displaySaveBugDialog() {
    return new DisplaySaveBugDialogAction().apply({});
}

export function displayVersionMismatchDialog() {
    return new DisplayVersionMismatchDialogAction().apply({});
}

export function cancelVersionMismatchDialog() {
    return new CancelVersionMismatchDialogAction().apply({});
}

export function displayVersionMismatchErrorDialog() {
    return new DisplayVersionMismatchErrorDialogAction().apply({});
}

export function callSaveBug() {
    return new CallSaveBugAction().apply({});
}

export function cancelSaveBugDialog() {
    return new CancelSaveBugDialogAction().apply({});
}

export function hideSaveBugDialog() {
    return new HideSaveBugDialogAction().apply({});
}





/******* S.D.G. *******/



