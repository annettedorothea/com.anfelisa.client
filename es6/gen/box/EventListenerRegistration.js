/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "dashboardView", "boxList"]
				)
			});
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "dashboardView", "boxList"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "activeCardList"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "editable"]
				)
			});
		ACEController.registerListener('box.ToggleScheduleCardSelectionOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.SelectScheduleCardRangeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.ToggleAllScheduleCardSelectionOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.FilterActiveCardListWithLastQualityChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedLastQualityFilters"]
				)
			});
		ACEController.registerListener('box.FilterActiveCardListOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "activeCardList"]
				)
			});
		ACEController.registerListener('box.DeleteBoxClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox"], 
					["boxId"]
				)
			});
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.DeleteBoxOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.DeleteBoxErrorEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard"], 
					["disableScoreButtons", "disableSortOutButton", "cardId", "categoryId", "categoryName", "count", "given", "lastQuality", "rootCategoryId", "scheduledCardId", "reinforceCardId", "scheduledDate", "scoredDate", "wanted", "index"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "reverse"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "openTodaysCards"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "allTodaysCards"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "index"]
				)
			});
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.LoadSettingsOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings"], 
					["maxIntervalInvalid", "maxCardsPerDayInvalid", "tooManyCardsStatus", "dictionaryLookupInvalid", "boxId", "maxInterval", "maxCardsPerDay", "categoryName", "dictionaryLookup", "givenLanguage", "wantedLanguage", "categoryId", "editable", "allActiveCards", "allCards"]
				)
			});
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDay"]
				)
			});
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDayInvalid"]
				)
			});
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxInterval"]
				)
			});
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxIntervalInvalid"]
				)
			});
		ACEController.registerListener('box.TooManyCardsStatusOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "tooManyCardsStatus"]
				)
			});
		ACEController.registerListener('box.CategoryNameChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryName"]
				)
			});
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookup"]
				)
			});
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "givenLanguage"]
				)
			});
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "wantedLanguage"]
				)
			});
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.RootCategoryNameChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryName"]
				)
			});
	}

}




/******* S.D.G. *******/



