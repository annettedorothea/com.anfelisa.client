/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../AppUtils";
import {destroyToast} from "../../../gen/common/ActionFunctions";


export const MessagesItem = (props) => {
	const text = translate(props.textKey, props.args);
	return <div
		className={`toastWrapper ${props.visible === false ? "fadeOut" : ""}`}
		onClick={() => destroyToast(props.id)}
	>
		<div className={`toast ${props.type}`}>{text}</div>
	</div>
}



/******* S.D.G. *******/



