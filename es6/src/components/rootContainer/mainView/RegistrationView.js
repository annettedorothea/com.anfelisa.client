/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React from "react";
import {Texts} from "../../../app/Texts";
import {
	emailChanged,
	passwordChanged,
	passwordRepetitionChanged, registerUser,
	usernameChanged
} from "../../../../gen/registration/ActionFunctions";
import CryptoJS from "crypto-js";
import {route} from "../../../../gen/common/ActionFunctions";


export const RegistrationView = (props) => {
	if (props.username === undefined) {
		return null;
	}
	return (
		<div className="center">
			<div className="form">
				<h1>{Texts.registration.title[props.language]}</h1>
				<div className="line">
					<label>{Texts.registration.username[props.language]}</label>
					<div className="inputContainer">
						<input
							type={"text"}
							onChange={(e) => usernameChanged(e.target.value)}
							autoComplete="off"
							value={props.username}
							id="username"
						/>
						{props.displayUsernameSpinner === true &&
						<i className="fas fa-cog fa-spin inside"/>}
						{props.available === true && props.username.length > 0 &&
						<i className="fas fa-check outside success"/>}
						{props.available === false && props.username.length > 0 &&
						<i className="fas fa-times outside error"/>}
					</div>
				</div>
				<div className="line">
					<label>{Texts.registration.password[props.language]}</label>
					<div className="inputContainer">
						<input
							type={"password"}
							onChange={(e) => passwordChanged(CryptoJS.MD5(e.target.value).toString())}
							autoComplete="off"
							id="password"
						/>
					</div>
				</div>
				<div className="line">
					<label>{Texts.registration.passwordRepetition[props.language]}</label>
					<div className="inputContainer">
						<input
							type={"password"}
							onChange={(e) => passwordRepetitionChanged(CryptoJS.MD5(e.target.value).toString())}
							autoComplete="off"
							id="passwordRepetition"
						/>
						{props.passwordMismatch === true &&
						<i className="fas fa-times outside error"/>}
					</div>
				</div>
				<div className="line">
					<label>{Texts.registration.email[props.language]}</label>
					<div className="inputContainer">
						<input
							type={"text"}
							onChange={(e) => emailChanged(e.target.value)}
							autoComplete="off"
							value={props.email}
							id="email"
						/>
						{props.emailInvalid === true && props.email.length > 0 &&
						<i className="fas fa-times outside error"/>}
					</div>
				</div>
				<div className="moreMarginLine hCenter">
					<button
						id="register"
						onClick={registerUser}
						disabled={
							props.available === false ||
							props.emailInvalid === true ||
							props.passwordMismatch === true ||
							(!props.username || props.username && props.username.length === 0) ||
							(!props.email || props.email && props.email.length === 0) ||
							(!props.password || props.password && props.password.length === 0)
						}>
						{Texts.registration.register[props.language]}
					</button>
					<button
						onClick={() => route("#")}>{Texts.registration.cancel[props.language]}
					</button>
				</div>
				<div className="line">
					<div
						className="small-font">{Texts.registration.terms[props.language]}</div>
				</div>
			</div>
		</div>
	);
}



/******* S.D.G. *******/



