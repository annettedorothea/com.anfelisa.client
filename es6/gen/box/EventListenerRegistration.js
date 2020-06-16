/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_data_Dashboard_boxList);
		ACEController.registerListener('box.LoadBoxesOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadBoxStatisticsOkEvent', AppState.set_state_State_data_Dashboard_boxList);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', AppState.set_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', AppState.reset_state_State_data_Dashboard_deleteBox);
		ACEController.registerListener('box.DeleteBoxErrorEvent', AppState.reset_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.LoadNextCardOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.DisplayWantedOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('box.LoadSettingsOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.LoadSettingsOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', AppState.set_state_State_data_BoxSettings_maxCardsPerDay);
		ACEController.registerListener('box.MaxCardsPerDayChangedOkEvent', AppState.set_state_State_data_BoxSettings_maxCardsPerDayInvalid);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_state_State_data_BoxSettings_maxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', AppState.set_state_State_data_BoxSettings_maxIntervalInvalid);
		ACEController.registerListener('box.CreateNewBoxOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('box.CreateNewBoxOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('box.CategoryNameChangedOkEvent', AppState.set_state_State_data_BoxSettings_categoryName);
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', AppState.set_state_State_data_BoxSettings_dictionaryLookup);
		ACEController.registerListener('box.DictionaryLookupChangedOkEvent', AppState.set_state_State_data_BoxSettings_dictionaryLookupInvalid);
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', AppState.set_state_State_data_BoxSettings_givenLanguage);
		ACEController.registerListener('box.GivenLanguageChangedOkEvent', AppState.set_state_State_data_BoxSettings_dictionaryLookupInvalid);
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', AppState.set_state_State_data_BoxSettings_wantedLanguage);
		ACEController.registerListener('box.WantedLanguageChangedOkEvent', AppState.set_state_State_data_BoxSettings_dictionaryLookupInvalid);
		ACEController.registerListener('box.RootCategoryNameChangedOkEvent', AppState.set_state_State_data_BoxSettings_categoryName);
	}

}




/******* S.D.G. *******/



