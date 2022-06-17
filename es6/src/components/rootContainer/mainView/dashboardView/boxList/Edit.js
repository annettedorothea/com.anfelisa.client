/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const Edit = (props) => {
	if (props.archived === true) {
		return null;
	}

	const onEditClick = (e) => {
		e.stopPropagation();
		props.onClick(props.categoryId,props.reverse);
	}

	return (
		<div className="buttons button1">
			<i
				className="fas fa-edit"
				onClick={(e) => onEditClick(e)}
				title={translate(Texts.box.edit)}
			/>
		</div>
	)
}



/******* S.D.G. *******/



