/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Buttons } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/Buttons";
import { ToggleInputOrder } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/ToggleInputOrder";
import { ScheduleCards } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/ScheduleCards";
import { SortCardsOut } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/SortCardsOut";
import { DeleteCards } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/DeleteCards";
import { MoveCards } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/MoveCards";
import { MoveUp } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/MoveUp";
import { MoveDown } from "../../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/header/buttons/MoveDown";
import { filterCards } from "../../../../../../../../card/ActionFunctions";
import { toggleAllScheduleCardSelection } from "../../../../../../../../card/ActionFunctions";
import { toggleInputOrder } from "../../../../../../../../card/ActionFunctions";
import { scheduleSelectedCards } from "../../../../../../../../card/ActionFunctions";
import { sortSelectedCardsOut } from "../../../../../../../../card/ActionFunctions";
import { deleteCardClick } from "../../../../../../../../card/ActionFunctions";
import { moveCardsClicked } from "../../../../../../../../card/ActionFunctions";
import { toggleCardOrder } from "../../../../../../../../card/ActionFunctions";


export const ButtonsContainer = ( props ) => {
	
	return <Buttons {...props} filterCards={filterCards} toggleAllScheduleCardSelection={toggleAllScheduleCardSelection} >
		<ToggleInputOrder {...props.toggleInputOrder }   onClick={toggleInputOrder}  />
		<ScheduleCards {...props.scheduleCards }  selectedCardIds={props.selectedCardIds}  onClick={scheduleSelectedCards}  />
		<SortCardsOut {...props.sortCardsOut }  selectedCardIds={props.selectedCardIds}  onClick={sortSelectedCardsOut}  />
		<DeleteCards {...props.deleteCards }  selectedCardIds={props.selectedCardIds}  onClick={deleteCardClick}  />
		<MoveCards {...props.moveCards }  selectedCardIds={props.selectedCardIds}  onClick={moveCardsClicked}  />
		<MoveUp {...props.moveUp }  selectedCardIds={props.selectedCardIds}  onClick={toggleCardOrder}  />
		<MoveDown {...props.moveDown }  selectedCardIds={props.selectedCardIds}  onClick={toggleCardOrder}  />
	</Buttons> 
}



/******* S.D.G. *******/



