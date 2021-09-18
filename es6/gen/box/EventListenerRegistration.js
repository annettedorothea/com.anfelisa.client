/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppUtils from "../../src/app/AppUtils";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "dashboardView"]]));
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "dashboardView"]]));
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"], "activeCardList"]));
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"], "selectedCardIds"]));
		ACEController.registerListener('box.LoadActiveCardsOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"], "editable"]));
		ACEController.registerListener('box.ToggleScheduleCardSelectionOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"], "selectedCardIds"]));
		ACEController.registerListener('box.ToggleAllScheduleCardSelectionOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "allActiveCardsView"], "selectedCardIds"]));
		ACEController.registerListener('box.DeleteBoxClickOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox"]));
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "boxId"]));
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "confirmDelete"]));
		ACEController.registerListener('box.DeleteBoxOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "boxId"]));
		ACEController.registerListener('box.DeleteBoxOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "confirmDelete"]));
		ACEController.registerListener('box.DeleteBoxErrorEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "boxId"]));
		ACEController.registerListener('box.DeleteBoxErrorEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "dashboardView"], "deleteBox", "confirmDelete"]));
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "nextCard"]));
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "reverse"]));
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "openTodaysCards"]));
		ACEController.registerListener('box.LoadNextCardOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "allTodaysCards"]));
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "nextCard", "index"]));
		ACEController.registerListener('box.DisplayWantedOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "queryCardView"], "enableScoreButtons"]));
		ACEController.registerListener('box.LoadSettingsOkEvent', (data) => AppUtils.merge(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings"]));
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "maxCardsPerDay"]));
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "maxCardsPerDayInvalid"]));
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "maxInterval"]));
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "maxIntervalInvalid"]));
		ACEController.registerListener('box.TooManyCardsStatusOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "tooManyCardsStatus"]));
		ACEController.registerListener('box.CategoryNameChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "categoryName"]));
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "dictionaryLookup"]));
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "dictionaryLookupInvalid"]));
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "givenLanguage"]));
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "dictionaryLookupInvalid"]));
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "wantedLanguage"]));
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "dictionaryLookupInvalid"]));
		ACEController.registerListener('box.RootCategoryNameChangedOkEvent', (data) => AppUtils.set(data, ["rootContainer", ["mainView", "boxSettingsView"], "boxSettings", "categoryName"]));
	}

}




/******* S.D.G. *******/



