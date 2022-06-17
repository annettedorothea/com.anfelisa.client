/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Buttons } from "../../../../../src/components/rootContainer/mainView/resetPasswordView/Buttons";
import { ResetPassword } from "../../../../../src/components/rootContainer/mainView/resetPasswordView/buttons/ResetPassword";
import { Cancel } from "../../../../../src/components/rootContainer/mainView/resetPasswordView/buttons/Cancel";
import { resetPassword } from "../../../../password/ActionFunctions";
import { routeToDefault } from "../../../../common/ActionFunctions";


export const ButtonsContainer = ( props ) => {
	
	return <Buttons {...props} >
		<ResetPassword {...props.resetPassword }   onClick={resetPassword}  />
		<Cancel {...props.cancel }   onClick={routeToDefault}  />
	</Buttons> 
}



/******* S.D.G. *******/



