/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const Delete = (props) => {
	if (props.archived === true) {
		return null;
	}

	const onDeleteClick = (e) => {
		e.stopPropagation();
		if (props.deletable) {
			props.onClick(props.boxId)
		}
	}

	return (
		<div className="buttons button4">
			<i
				className={`far fa-trash-alt ${props.deletable ? "danger" : "disabled"}`}
				onClick={(e) => onDeleteClick(e)}
				title={props.deletable ?
					translate(Texts.box.deleteTitle) :
					translate(Texts.box.deleteTitleShared)}
			/>
		</div>
	)
}



/******* S.D.G. *******/



