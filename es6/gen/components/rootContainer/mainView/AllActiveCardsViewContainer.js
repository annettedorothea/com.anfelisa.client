/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { AllActiveCardsView } from "../../../../src/components/rootContainer/mainView/AllActiveCardsView";
import { ActiveCardListItemContainer } from "./allActiveCardsView/ActiveCardListItemContainer";
import { filterActiveCardListWithLastQualityChanged } from "../../../box/ActionFunctions";
import { scheduleSelectedCards } from "../../../box/ActionFunctions";
import { sortSelectedCardsOut } from "../../../box/ActionFunctions";
import { toggleAllScheduleCardSelection } from "../../../box/ActionFunctions";
import { selectScheduleCardRange } from "../../../box/ActionFunctions";
import { toggleScheduleCardSelection } from "../../../box/ActionFunctions";
import { updateCardPriority } from "../../../box/ActionFunctions";


export const AllActiveCardsViewContainer = ( props ) => {
	
	return <AllActiveCardsView {...props} filterActiveCardListWithLastQualityChanged={filterActiveCardListWithLastQualityChanged} scheduleSelectedCards={scheduleSelectedCards} sortSelectedCardsOut={sortSelectedCardsOut} toggleAllScheduleCardSelection={toggleAllScheduleCardSelection} >
		{ props.activeCardList ? props.activeCardList.map((item, index) => <ActiveCardListItemContainer {...item} key={item.cardId} index={index} selectedCardIds={props.selectedCardIds} editable={props.editable}   selectScheduleCardRange={selectScheduleCardRange} toggleScheduleCardSelection={toggleScheduleCardSelection} updateCardPriority={updateCardPriority}  />) : [] }
	</AllActiveCardsView> 
}



/******* S.D.G. *******/


