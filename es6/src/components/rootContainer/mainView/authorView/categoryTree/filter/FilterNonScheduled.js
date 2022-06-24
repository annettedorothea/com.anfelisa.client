/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../../AppUtils";
import {Texts} from "../../../../../../app/Texts";

export const FilterNonScheduled = (props) => {
	return <>
		<input
			type="checkbox"
			onClick={props.onChange}
			value={props.filterNonScheduled}
			id="filterNonScheduled"
		/>
		<label htmlFor="filterNonScheduled">{translate(Texts.categoryTree.filterNonScheduled)}</label>
	</>
}



/******* S.D.G. *******/


