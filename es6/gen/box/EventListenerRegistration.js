/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_rootContainer_dashboardView);
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', AppState.set_rootContainer_dashboardView_boxList);
		ACEController.registerListener('box.LoadActiveCardsOkEvent', AppState.set_rootContainer_allActiveCardsView_activeCardList);
		ACEController.registerListener('box.LoadActiveCardsOkEvent', AppState.set_rootContainer_allActiveCardsView_selectedCardIds);
		ACEController.registerListener('box.LoadActiveCardsOkEvent', AppState.set_rootContainer_allActiveCardsView_editable);
		ACEController.registerListener('box.ToggleScheduleCardSelectionOkEvent', AppState.set_rootContainer_allActiveCardsView_selectedCardIds);
		ACEController.registerListener('box.ToggleAllScheduleCardSelectionOkEvent', AppState.set_rootContainer_allActiveCardsView_selectedCardIds);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', AppState.set_rootContainer_dashboardView_deleteBox);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', AppState.set_rootContainer_dashboardView_deleteBox_boxId);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', AppState.set_rootContainer_dashboardView_deleteBox_confirmDelete);
		ACEController.registerListener('box.DeleteBoxOkEvent', AppState.set_rootContainer_dashboardView_deleteBox_boxId);
		ACEController.registerListener('box.DeleteBoxOkEvent', AppState.set_rootContainer_dashboardView_deleteBox_confirmDelete);
		ACEController.registerListener('box.DeleteBoxErrorEvent', AppState.set_rootContainer_dashboardView_deleteBox_boxId);
		ACEController.registerListener('box.DeleteBoxErrorEvent', AppState.set_rootContainer_dashboardView_deleteBox_confirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.merge_rootContainer_queryCardView);
		ACEController.registerListener('box.DisplayWantedOkEvent', AppState.merge_rootContainer_queryCardView);
		ACEController.registerListener('box.LoadSettingsOkEvent', AppState.merge_rootContainer_boxSettingsView);
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', AppState.set_rootContainer_boxSettingsView_maxCardsPerDay);
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', AppState.set_rootContainer_boxSettingsView_maxCardsPerDayInvalid);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_rootContainer_boxSettingsView_maxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_rootContainer_boxSettingsView_maxIntervalInvalid);
		ACEController.registerListener('box.TooManyCardsStatusOkEvent', AppState.set_rootContainer_boxSettingsView_tooManyCardsStatus);
		ACEController.registerListener('box.CategoryNameChangedOkEvent', AppState.set_rootContainer_boxSettingsView_categoryName);
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', AppState.set_rootContainer_boxSettingsView_dictionaryLookup);
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', AppState.set_rootContainer_boxSettingsView_dictionaryLookupInvalid);
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', AppState.set_rootContainer_boxSettingsView_givenLanguage);
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', AppState.set_rootContainer_boxSettingsView_dictionaryLookupInvalid);
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', AppState.set_rootContainer_boxSettingsView_wantedLanguage);
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', AppState.set_rootContainer_boxSettingsView_dictionaryLookupInvalid);
		ACEController.registerListener('box.RootCategoryNameChangedOkEvent', AppState.set_rootContainer_boxSettingsView_categoryName);
	}

}




/******* S.D.G. *******/



