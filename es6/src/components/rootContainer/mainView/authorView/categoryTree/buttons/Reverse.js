/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {createReverseBox} from "../../../../../../../gen/category/ActionFunctions";
import {translate} from "../../../../../../AppUtils";
import {Texts} from "../../../../../../app/Texts";

export const Reverse = (props) => {
	if (props.reverseBoxExists === false) {
		return <button
			onClick={props.onClick}
			title={translate(Texts.categoryTree.createReverseBox)}
		>
			<i className="fas fa-plus-circle"/>
		</button>
	}
	return null
}



/******* S.D.G. *******/



