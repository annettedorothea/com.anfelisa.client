/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const Delete = (props) => {
	return <button
		className="danger"
		onClick={props.onClick}
		disabled={!props.deletable}
	>
		{translate(Texts.profile.delete)}
	</button>
}



/******* S.D.G. *******/


