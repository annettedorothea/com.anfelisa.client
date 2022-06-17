/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { usernameForgotPasswordChanged } from "../../../../../gen/password/ActionFunctions";
import {translate} from "../../../../AppUtils";
import {Texts} from "../../../../app/Texts";

export const Username = (props) => {
	return <div className="line">
		<label htmlFor="username">{translate(Texts.forgotPassword.username)}</label>
		<input
			id="username"
			value={props.username}
			type="text"
			autoComplete="new-password"
			onChange={(e) => props.onChange(e.target.value)}
		/>
	</div>
}



/******* S.D.G. *******/



