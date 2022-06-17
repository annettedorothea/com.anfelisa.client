/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import InitAction from "../../src/common/actions/InitAction";
import GetUserInfoAction from "../../src/common/actions/GetUserInfoAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import RouteToDefaultAction from "../../src/common/actions/RouteToDefaultAction";
import RouteToQueryCardsAction from "../../src/common/actions/RouteToQueryCardsAction";
import RouteToAuthorViewAction from "../../src/common/actions/RouteToAuthorViewAction";
import RouteToBoxSettingsAction from "../../src/common/actions/RouteToBoxSettingsAction";
import RouteToBoxCreateAction from "../../src/common/actions/RouteToBoxCreateAction";
import RouteToActiveCardsAction from "../../src/common/actions/RouteToActiveCardsAction";
import RouteToForgotPasswordAction from "../../src/common/actions/RouteToForgotPasswordAction";
import RouteToPrivacyPolicyAction from "../../src/common/actions/RouteToPrivacyPolicyAction";
import RouteToRegistrationAction from "../../src/common/actions/RouteToRegistrationAction";
import RouteToProfileViewAction from "../../src/common/actions/RouteToProfileViewAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayToastAction from "../../src/common/actions/DisplayToastAction";
import DisplayErrorToastAction from "../../src/common/actions/DisplayErrorToastAction";
import DisplayWarningToastAction from "../../src/common/actions/DisplayWarningToastAction";
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

export function routeToDefault() {
    return new RouteToDefaultAction().apply({});
}

export function routeToQueryCards(boxId) {
    return new RouteToQueryCardsAction().apply({boxId});
}

export function routeToAuthorView(categoryId, reverse) {
    return new RouteToAuthorViewAction().apply({categoryId, reverse});
}

export function routeToBoxSettings(boxId) {
    return new RouteToBoxSettingsAction().apply({boxId});
}

export function routeToBoxCreate(boxId) {
    return new RouteToBoxCreateAction().apply({boxId});
}

export function routeToActiveCards(boxId) {
    return new RouteToActiveCardsAction().apply({boxId});
}

export function routeToForgotPassword() {
    return new RouteToForgotPasswordAction().apply({});
}

export function routeToPrivacyPolicy() {
    return new RouteToPrivacyPolicyAction().apply({});
}

export function routeToRegistration() {
    return new RouteToRegistrationAction().apply({});
}

export function routeToProfileView() {
    return new RouteToProfileViewAction().apply({});
}

export function logout() {
    return new LogoutAction().apply({});
}

export function displayToast(textKey, args) {
    return new DisplayToastAction().apply({textKey, args});
}

export function displayErrorToast(textKey, args) {
    return new DisplayErrorToastAction().apply({textKey, args});
}

export function displayWarningToast(textKey, args) {
    return new DisplayWarningToastAction().apply({textKey, args});
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



