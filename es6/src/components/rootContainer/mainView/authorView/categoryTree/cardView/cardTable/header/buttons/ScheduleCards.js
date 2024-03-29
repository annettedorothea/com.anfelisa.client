/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../../../../../AppUtils";
import {Texts} from "../../../../../../../../../app/Texts";

export const ScheduleCards = (props) => {
	return <button
		onClick={props.onClick}
		title={translate(Texts.cardList.scheduleSelectedCards)}
		disabled={props.selectedCardIds.length === 0}
		id="schedule"
	>
		<i className="far fa-calendar-plus"></i>
	</button>
}



/******* S.D.G. *******/



