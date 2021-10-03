/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import UsernameChangedAction from "../../src/registration/actions/UsernameChangedAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import PasswordRepetitionChangedAction from "../../src/registration/actions/PasswordRepetitionChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import LoginAction from "../../src/registration/actions/LoginAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export function checkUsername(callback) {
    new CheckUsernameAction(callback).apply({});
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

export function registerUser(callback) {
    new RegisterUserAction(callback).apply({});
}

export function login(callback) {
    new LoginAction(callback).apply({});
}

export function confirmEmail(username, token, callback) {
    new ConfirmEmailAction(callback).apply({username, token});
}





/******* S.D.G. *******/



