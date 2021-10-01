/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import UsernameChangedAction from "../../src/registration/actions/UsernameChangedAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import PasswordRepetitionChangedAction from "../../src/registration/actions/PasswordRepetitionChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import LoginAction from "../../src/registration/actions/LoginAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export function checkUsername() {
    new CheckUsernameAction().apply({});
}

export function usernameChanged(username) {
    new UsernameChangedAction().apply({username});
}

export function emailChanged(email) {
    new EmailChangedAction().apply({email});
}

export function passwordChanged(password) {
    new PasswordChangedAction().apply({password});
}

export function passwordRepetitionChanged(passwordRepetition) {
    new PasswordRepetitionChangedAction().apply({passwordRepetition});
}

export function registerUser() {
    new RegisterUserAction().apply({});
}

export function login() {
    new LoginAction().apply({});
}

export function confirmEmail(username, token) {
    new ConfirmEmailAction().apply({username, token});
}





/******* S.D.G. *******/



