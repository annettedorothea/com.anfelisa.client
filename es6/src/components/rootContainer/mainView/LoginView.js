/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {div, h1, input, label, button, a} from "../../../../gen/components/ReactHelper";
import {login, toggleSaveInLocalStorage, usernameChanged} from "../../../../gen/login/ActionFunctions";
import {Texts} from "../../../app/Texts";
import {route} from "../../../../gen/common/ActionFunctions";

export function uiElement(attributes) {
	return div({class: "center form"}, [
		h1({}, [Texts.login.title[attributes.language]]),
		div({class: "line"}, [
			label({
				htmlFor: "username"
			}, [Texts.login.username[attributes.language]]),
			input({
				id: "username",
				value: attributes.username,
				type: "text",
				onChange:(e) => usernameChanged(e.target.value)
			}),
			a({
				onClick: () => route("#registration")
			}, [Texts.login.registration[attributes.language] + "REG"])
		]),
		div({class: "line"}, [
			label({
				htmlFor: "password"
			}, [Texts.login.password[attributes.language]]),
			input({
				id: "password",
				type: "password",
				onChange:(e) => console.log(e.target.value)
			}),
			a({
				onClick: () => route("#forgotpassword")
			}, [Texts.login.forgotPassword[attributes.language]])
		]),
		div({class: "line"}, [
			input({
				id: "saveInLocalStorage",
				checked: attributes.saveInLocalStorage,
				type: "checkbox",
				onChange:() => toggleSaveInLocalStorage()
			}),
			label({
				htmlFor: "saveInLocalStorage"
			}, [Texts.login.saveInLocalStorage[attributes.language]]),
			div({class: "small-font"}, [Texts.login.saveInLocalStorageHint[attributes.language]])
		]),
		div({class: "moreMarginLine hCenter"}, [
			button({
				class: "primary",
				onClick:() => login()
			}, [Texts.login.signin[attributes.language]]),
		])
	]);
}



/******* S.D.G. *******/



