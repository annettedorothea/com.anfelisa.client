/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Buttons } from "../../../../../src/components/rootContainer/mainView/registrationView/Buttons";
import { Register } from "../../../../../src/components/rootContainer/mainView/registrationView/buttons/Register";
import { Cancel } from "../../../../../src/components/rootContainer/mainView/registrationView/buttons/Cancel";
import { registerUser } from "../../../../registration/ActionFunctions";
import { routeToDefault } from "../../../../common/ActionFunctions";


export const ButtonsContainer = ( props ) => {
	
	return <Buttons {...props} >
		<Register {...props.register }   onClick={registerUser}  />
		<Cancel {...props.cancel }   onClick={routeToDefault}  />
	</Buttons> 
}



/******* S.D.G. *******/



