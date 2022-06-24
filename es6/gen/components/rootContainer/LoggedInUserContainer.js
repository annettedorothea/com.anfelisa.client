/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { LoggedInUser } from "../../../src/components/rootContainer/LoggedInUser";
import { routeToDefault } from "../../common/ActionFunctions";
import { logout } from "../../common/ActionFunctions";
import { routeToProfileView } from "../../common/ActionFunctions";


export const LoggedInUserContainer = ( props ) => {
	
	return <LoggedInUser {...props} routeToDefault={routeToDefault} logout={logout} routeToProfileView={routeToProfileView}  /> 
}



/******* S.D.G. *******/


