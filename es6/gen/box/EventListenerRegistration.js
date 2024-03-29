/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "dashboardView", "boxList"]
				)
			});
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "dashboardView", "boxList"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "activeCardList"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "editable"]
				)
			});
		ACEController.registerListener('box.ToggleScheduleCardSelectionOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.SelectScheduleCardRangeOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.ToggleAllScheduleCardSelectionOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.FilterActiveCardListWithLastQualityChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedLastQualityFilters"]
				)
			});
		ACEController.registerListener('box.FilterActiveCardListOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "activeCardList"]
				)
			});
		ACEController.registerListener('box.FilterActiveCardListOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "allActiveCardsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'allActiveCardsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "allActiveCardsView", "selectedCardIds"]
				)
			});
		ACEController.registerListener('box.DeleteBoxClickOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox"], 
					["boxId"]
				)
			});
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.DeleteBoxOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.DeleteBoxErrorEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "dashboardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'dashboardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "dashboardView", "deleteBox", "boxId"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "boxName"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard"], 
					["disableScoreButtons", "disableSortOutButton", "cardId", "categoryId", "categoryName", "count", "given", "lastQuality", "rootCategoryId", "scheduledCardId", "reinforceCardId", "scheduledDate", "scoredDate", "wanted", "index"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "reverse"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "openTodaysCards"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "allTodaysCards"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
				)
			});
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "index"]
				)
			});
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.ScoreCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.ScoreCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
				)
			});
		ACEController.registerListener('box.ScoreReinforceCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.ScoreReinforceCardOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
				)
			});
		ACEController.registerListener('box.SortCardOutOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableScoreButtons"]
				)
			});
		ACEController.registerListener('box.SortCardOutOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "queryCardView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'queryCardView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "queryCardView", "nextCard", "disableSortOutButton"]
				)
			});
		ACEController.registerListener('box.LoadSettingsOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.merge(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings"], 
					["maxIntervalInvalid", "maxCardsPerDayInvalid", "tooManyCardsStatus", "dictionaryLookupInvalid", "boxId", "maxInterval", "maxCardsPerDay", "categoryName", "dictionaryLookup", "givenLanguage", "wantedLanguage", "categoryId", "editable", "allActiveCards", "allCards"]
				)
			});
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDay"]
				)
			});
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxCardsPerDayInvalid"]
				)
			});
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxInterval"]
				)
			});
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "maxIntervalInvalid"]
				)
			});
		ACEController.registerListener('box.TooManyCardsStatusOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "tooManyCardsStatus"]
				)
			});
		ACEController.registerListener('box.CategoryNameChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryName"]
				)
			});
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookup"]
				)
			});
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "givenLanguage"]
				)
			});
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "wantedLanguage"]
				)
			});
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "dictionaryLookupInvalid"]
				)
			});
		ACEController.registerListener('box.RootCategoryNameChangedOkEvent', (data) => {
				if (AppState.get(["rootContainer", "mainView", "boxSettingsView"]) === undefined) {
					console.warn("path ['rootContainer', 'mainView', 'boxSettingsView'] does not match exclusive view mainView in AppState", AppState.get(["rootContainer", "mainView"]));
					return;
				}
				AppState.set(
					data, 
					["rootContainer", "mainView", "boxSettingsView", "boxSettings", "categoryName"]
				)
			});
	}

}




/******* S.D.G. *******/



