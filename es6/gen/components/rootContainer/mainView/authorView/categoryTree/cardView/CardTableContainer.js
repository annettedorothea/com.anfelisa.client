/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { CardTable } from "../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/CardTable";
import { CardListItemContainer } from "./cardTable/CardListItemContainer";
import { NewCardContainer } from "./cardTable/NewCardContainer";
import { CardDuplicatesItemContainer } from "./cardTable/CardDuplicatesItemContainer";
import { toggleInputOrder } from "../../../../../../card/ActionFunctions";
import { filterCards } from "../../../../../../card/ActionFunctions";
import { toggleAllScheduleCardSelection } from "../../../../../../card/ActionFunctions";
import { scheduleSelectedCards } from "../../../../../../card/ActionFunctions";
import { sortSelectedCardsOut } from "../../../../../../card/ActionFunctions";
import { cancelEditCard } from "../../../../../../card/ActionFunctions";
import { changeCardOrder } from "../../../../../../card/ActionFunctions";
import { deleteCardClick } from "../../../../../../card/ActionFunctions";
import { editCard } from "../../../../../../card/ActionFunctions";
import { givenOfEditedCardChanged } from "../../../../../../card/ActionFunctions";
import { givenImageOfEditedCardChanged } from "../../../../../../card/ActionFunctions";
import { wantedOfEditedCardChanged } from "../../../../../../card/ActionFunctions";
import { wantedImageOfEditedCardChanged } from "../../../../../../card/ActionFunctions";
import { selectScheduleCardRange } from "../../../../../../card/ActionFunctions";
import { toggleScheduleCardSelection } from "../../../../../../card/ActionFunctions";
import { updateCard } from "../../../../../../card/ActionFunctions";
import { updateCardPriority } from "../../../../../../card/ActionFunctions";
import { moveCardsStarted } from "../../../../../../card/ActionFunctions";
import { onDragEnter } from "../../../../../../card/ActionFunctions";
import { onDragExit } from "../../../../../../card/ActionFunctions";
import { cancelNewCard } from "../../../../../../card/ActionFunctions";
import { createCard } from "../../../../../../card/ActionFunctions";
import { givenOfNewCardChanged } from "../../../../../../card/ActionFunctions";
import { givenImageOfNewCardChanged } from "../../../../../../card/ActionFunctions";
import { wantedOfNewCardChanged } from "../../../../../../card/ActionFunctions";
import { wantedImageOfNewCardChanged } from "../../../../../../card/ActionFunctions";
import { passValueToDictionary } from "../../../../../../card/ActionFunctions";
import { translate } from "../../../../../../card/ActionFunctions";
import { routeToSelectedCategory } from "../../../../../../common/ActionFunctions";


export const CardTableContainer = ( props ) => {
	
	return <CardTable {...props} toggleInputOrder={toggleInputOrder} filterCards={filterCards} toggleAllScheduleCardSelection={toggleAllScheduleCardSelection} scheduleSelectedCards={scheduleSelectedCards} sortSelectedCardsOut={sortSelectedCardsOut} >
		{ props.cardList ? props.cardList.map((item, index) => <CardListItemContainer {...item} key={item.cardId} index={index} rootCategory={props.rootCategory} editedCard={props.editedCard} selectedCardIds={props.selectedCardIds} naturalInputOrder={props.naturalInputOrder} filter={props.filter} dragTargetCardId={props.dragTargetCardId}   cancelEditCard={cancelEditCard} changeCardOrder={changeCardOrder} deleteCardClick={deleteCardClick} editCard={editCard} givenOfEditedCardChanged={givenOfEditedCardChanged} givenImageOfEditedCardChanged={givenImageOfEditedCardChanged} wantedOfEditedCardChanged={wantedOfEditedCardChanged} wantedImageOfEditedCardChanged={wantedImageOfEditedCardChanged} selectScheduleCardRange={selectScheduleCardRange} toggleScheduleCardSelection={toggleScheduleCardSelection} updateCard={updateCard} updateCardPriority={updateCardPriority} moveCardsStarted={moveCardsStarted} onDragEnter={onDragEnter} onDragExit={onDragExit}  />) : [] }
		<NewCardContainer {...props.newCard }  naturalInputOrder={props.naturalInputOrder} rootCategory={props.rootCategory}  cancelNewCard={cancelNewCard} createCard={createCard} givenOfNewCardChanged={givenOfNewCardChanged} givenImageOfNewCardChanged={givenImageOfNewCardChanged} wantedOfNewCardChanged={wantedOfNewCardChanged} wantedImageOfNewCardChanged={wantedImageOfNewCardChanged} passValueToDictionary={passValueToDictionary} translate={translate}  />
		{ props.cardDuplicates ? props.cardDuplicates.map((item, index) => <CardDuplicatesItemContainer {...item} key={item.cardId} index={index} naturalInputOrder={props.naturalInputOrder} rootCategory={props.rootCategory} reverse={props.reverse}   routeToSelectedCategory={routeToSelectedCategory}  />) : [] }
	</CardTable> 
}



/******* S.D.G. *******/



