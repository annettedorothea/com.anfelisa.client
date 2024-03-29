/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { ResetPasswordView } from "../../../../src/components/rootContainer/mainView/ResetPasswordView";
import { Password } from "../../../../src/components/rootContainer/mainView/resetPasswordView/Password";
import { PasswordRepetition } from "../../../../src/components/rootContainer/mainView/resetPasswordView/PasswordRepetition";
import { ButtonsContainer } from "./resetPasswordView/ButtonsContainer";
import { passwordChanged } from "../../../password/ActionFunctions";
import { passwordRepetitionChanged } from "../../../password/ActionFunctions";


export const ResetPasswordViewContainer = ( props ) => {
	
	return <ResetPasswordView {...props} >
		<Password {...props.password }   onChange={passwordChanged}  />
		<PasswordRepetition {...props.passwordRepetition }   onChange={passwordRepetitionChanged}  />
		<ButtonsContainer {...props.buttons }    />
	</ResetPasswordView> 
}



/******* S.D.G. *******/



