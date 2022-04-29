// noinspection JSUnresolvedFunction

/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React from "react";
import {Texts} from "../../../app/Texts";
import {passwordChanged, passwordRepetitionChanged, resetPassword} from "../../../../gen/password/ActionFunctions";
import CryptoJS from "crypto-js";
import {route} from "../../../../gen/common/ActionFunctions";
import {translate} from "../../../AppUtils";


export const ResetPasswordView = (props) => {
	return (
		<div className="center">
			<div className="form">
				<h1>{translate(Texts.resetPassword.title)}</h1>
				<div className="line">
					<label>{translate(Texts.resetPassword.password)}</label>
					<div className="inputContainer">
						<input
							type={"password"}
							onChange={(e) => passwordChanged(CryptoJS.MD5(e.target.value).toString())}
							autoComplete="off"
						/>
					</div>
				</div>
				<div className="line">
					<label>{translate(Texts.resetPassword.passwordRepetition)}</label>
					<div className="inputContainer">
						<input
							type={"password"}
							onChange={(e) => passwordRepetitionChanged(CryptoJS.MD5(e.target.value).toString())}
							autoComplete="off"
						/>
						{props.passwordMismatch === true &&
						<i className="fas fa-times outside error"/>}
					</div>
				</div>
				<div className="moreMarginLine hCenter">
					<button
						onClick={resetPassword}
						disabled={
							!props.password || props.password && props.password.length === 0 ||
							props.passwordMismatch === true
						}>
						{translate(Texts.resetPassword.submit)}
					</button>
					<button
						onClick={() => route("#")}>{translate(Texts.resetPassword.cancel)}</button>
				</div>
			</div>
		</div>
	);
}



/******* S.D.G. *******/



