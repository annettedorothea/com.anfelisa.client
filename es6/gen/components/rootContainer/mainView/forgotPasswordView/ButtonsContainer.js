/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Buttons } from "../../../../../src/components/rootContainer/mainView/forgotPasswordView/Buttons";
import { ForgotPassword } from "../../../../../src/components/rootContainer/mainView/forgotPasswordView/buttons/ForgotPassword";
import { forgotPassword } from "../../../../password/ActionFunctions";
import { Cancel } from "../../../../../src/components/rootContainer/mainView/forgotPasswordView/buttons/Cancel";
import { route } from "../../../../common/ActionFunctions";


export const ButtonsContainer = ( props ) => {
	
	return <Buttons {...props} >
		<ForgotPassword {...props.forgotPassword }   onClick={forgotPassword}  />
		<Cancel {...props.cancel }   onClick={route}  />
	</Buttons> 
}



/******* S.D.G. *******/



