/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const Settings = (props) => {
	if (props.archived === true) {
		return null;
	}

	const onSettingsClick = (e) => {
		e.stopPropagation();
		props.onClick(props.boxId)
	}

	return (
		<div className="buttons button2">
			<i
				className="fas fa-cog"
				onClick={(e) => onSettingsClick(e)}
				title={translate(Texts.box.settings)}
			/>
		</div>
	)
}



/******* S.D.G. *******/


