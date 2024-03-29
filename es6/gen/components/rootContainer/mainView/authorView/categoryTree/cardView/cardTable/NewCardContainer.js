/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { NewCard } from "../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/cardTable/NewCard";
import { cancelNewCard } from "../../../../../../../card/ActionFunctions";
import { createCard } from "../../../../../../../card/ActionFunctions";
import { givenOfNewCardChanged } from "../../../../../../../card/ActionFunctions";
import { givenImageOfNewCardChanged } from "../../../../../../../card/ActionFunctions";
import { wantedOfNewCardChanged } from "../../../../../../../card/ActionFunctions";
import { wantedImageOfNewCardChanged } from "../../../../../../../card/ActionFunctions";
import { passValueToDictionary } from "../../../../../../../card/ActionFunctions";
import { translate } from "../../../../../../../card/ActionFunctions";


export const NewCardContainer = ( props ) => {
	
	return <NewCard {...props} cancelNewCard={cancelNewCard} createCard={createCard} givenOfNewCardChanged={givenOfNewCardChanged} givenImageOfNewCardChanged={givenImageOfNewCardChanged} wantedOfNewCardChanged={wantedOfNewCardChanged} wantedImageOfNewCardChanged={wantedImageOfNewCardChanged} passValueToDictionary={passValueToDictionary} translate={translate}  /> 
}



/******* S.D.G. *******/



