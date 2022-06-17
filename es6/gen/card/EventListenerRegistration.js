/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView"], 
					["rootCategory", "selectedCategory", "reverse", "naturalInputOrder", "cardTable", "deleteCard", "dictionaryValue", "selectedCardIds", "movedCardIds", "dragTargetCardId", "editedCard"]
				)
			});
		ACEController.registerListener('card.CreateCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard"], 
					["naturalInputOrder", "rootCategory", "given", "wanted", "index", "displaySpinner"]
				)
			});
		ACEController.registerListener('card.UpdateCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "editedCard"], 
					["cardId", "given", "wanted", "index"]
				)
			});
		ACEController.registerListener('card.DeleteCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "deleteCard"], 
					["confirmDelete", "cardId"]
				)
			});
		ACEController.registerListener('card.GivenOfNewCardChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard", "given"]
				)
			});
		ACEController.registerListener('card.WantedOfNewCardChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard", "wanted"]
				)
			});
		ACEController.registerListener('card.CancelNewCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard"], 
					["naturalInputOrder", "rootCategory", "given", "wanted", "index", "displaySpinner"]
				)
			});
		ACEController.registerListener('card.GivenOfEditedCardChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "editedCard", "given"]
				)
			});
		ACEController.registerListener('card.WantedOfEditedCardChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "editedCard", "wanted"]
				)
			});
		ACEController.registerListener('card.CancelEditCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "editedCard"], 
					["cardId", "given", "wanted", "index"]
				)
			});
		ACEController.registerListener('card.EditCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "editedCard"], 
					["cardId", "given", "wanted", "index"]
				)
			});
		ACEController.registerListener('card.DeleteCardClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "deleteCard"], 
					["confirmDelete", "cardId"]
				)
			});
		ACEController.registerListener('card.CancelDeleteCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "deleteCard"], 
					["confirmDelete", "cardId"]
				)
			});
		ACEController.registerListener('card.FilterCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "filter"]
				)
			});
		ACEController.registerListener('card.PassValueToDictionaryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "dictionaryValue"]
				)
			});
		ACEController.registerListener('card.ToggleInputOrderOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "naturalInputOrder"]
				)
			});
		ACEController.registerListener('card.ToggleScheduleCardSelectionOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('card.SelectScheduleCardRangeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('card.ToggleAllScheduleCardSelectionOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('card.MoveCardsStartedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "movedCardIds"]
				)
			});
		ACEController.registerListener('card.MoveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "movedCardIds"]
				)
			});
		ACEController.registerListener('card.MoveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
				)
			});
		ACEController.registerListener('card.MoveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropAllowed"]
				)
			});
		ACEController.registerListener('card.ChangeCardOrderOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "movedCardIds"]
				)
			});
		ACEController.registerListener('card.ChangeCardOrderOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "dragTargetCardId"]
				)
			});
		ACEController.registerListener('card.OnDragEnterOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "dragTargetCardId"]
				)
			});
		ACEController.registerListener('card.OnDragExitOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "dragTargetCardId"]
				)
			});
		ACEController.registerListener('card.SearchDuplicateCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "cardDuplicates"]
				)
			});
		ACEController.registerListener('card.TranslateWantedFetchedEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard", "wanted"]
				)
			});
		ACEController.registerListener('card.TranslateGivenFetchedEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView", "cardTable", "newCard", "given"]
				)
			});
	}

}




/******* S.D.G. *******/



