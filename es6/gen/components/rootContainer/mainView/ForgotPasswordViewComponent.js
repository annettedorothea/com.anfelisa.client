/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import React, {useState, useEffect} from 'react';
import { uiElement } from "../../../../src/components/rootContainer/mainView/ForgotPasswordView";

export const setForgotPasswordViewState = (newState) => {
    if (functions.setState) {
        functions.setState(newState);
    }
}

let functions = {};

export const ForgotPasswordViewComponent = (props) => {
	const [state, setState] = useState();
	functions.setState = setState;
	return uiElement({...props, ...state});
}



/******* S.D.G. *******/



