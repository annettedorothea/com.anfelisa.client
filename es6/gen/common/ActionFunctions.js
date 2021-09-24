/********************************************************************************
 * generated by de.acegen 1.3.0
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
    new InitAction().apply({});
}

export function getUserInfo(token) {
    new GetUserInfoAction().apply({token});
}

export function routeChanged() {
    new RouteChangedAction().apply({});
}

export function route(hash) {
    new RouteAction().apply({hash});
}

export function logout() {
    new LogoutAction().apply({});
}

export function displayToast(message, error) {
    new DisplayToastAction().apply({message, error});
}

export function hideToast(id) {
    new HideToastAction().apply({id});
}

export function destroyToast(id) {
    new DestroyToastAction().apply({id});
}

export function displaySaveBugDialog() {
    new DisplaySaveBugDialogAction().apply({});
}

export function displayVersionMismatchDialog() {
    new DisplayVersionMismatchDialogAction().apply({});
}

export function cancelVersionMismatchDialog() {
    new CancelVersionMismatchDialogAction().apply({});
}

export function displayVersionMismatchErrorDialog() {
    new DisplayVersionMismatchErrorDialogAction().apply({});
}

export function callSaveBug() {
    new CallSaveBugAction().apply({});
}

export function cancelSaveBugDialog() {
    new CancelSaveBugDialogAction().apply({});
}

export function hideSaveBugDialog() {
    new HideSaveBugDialogAction().apply({});
}





/******* S.D.G. *******/



