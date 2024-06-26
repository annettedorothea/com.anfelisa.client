/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Header } from "../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/Header";
import { ButtonsContainer } from "./header/ButtonsContainer";
import { filterCards } from "../../../../../../../card/ActionFunctions";
import { toggleAllScheduleCardSelection } from "../../../../../../../card/ActionFunctions";


export const HeaderContainer = ( props ) => {
	
	return <Header {...props} filterCards={filterCards} >
		<ButtonsContainer {...props.buttons }  selectedCardIds={props.selectedCardIds} cardList={props.cardList}  toggleAllScheduleCardSelection={toggleAllScheduleCardSelection}  />
	</Header> 
}



/******* S.D.G. *******/



