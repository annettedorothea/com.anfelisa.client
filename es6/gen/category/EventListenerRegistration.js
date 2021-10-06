/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree"], 
					["filterNonScheduled", "reverseBoxExists", "priority", "selectedCategory", "rootCategory", "displayDeleteCategory", "categoryDialog", "inviteUserDialog", "deleteCategoryDialog", "dropAllowed", "dropTargetCategoryId", "movedCategory"]
				)
			});
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "cardView"], 
					["cardList", "naturalInputOrder", "filter", "editedCard", "newCard", "cardDuplicates", "deleteCard", "dictionaryValue", "selectedCardIds", "movedCardIds", "dragTargetCardId"]
				)
			});
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "boxId"]
				)
			});
		ACEController.registerListener('category.ReloadCategoryTreeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.ReloadCategoryTreeOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.ExpandTreeItemOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.CollapseTreeItemOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.CollapseTreeItemSelectParentCategoryEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.SelectTreeItemOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "rootCategoryId", "childCategories", "nonScheduledCount", "editable"]
				)
			});
		ACEController.registerListener('category.NewCategoryClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog"], 
					["categoryName", "newCategory", "display"]
				)
			});
		ACEController.registerListener('category.CancelCategoryDialogOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog"], 
					["categoryName", "newCategory", "display"]
				)
			});
		ACEController.registerListener('category.CategoryNameChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog", "categoryName"]
				)
			});
		ACEController.registerListener('category.CreateCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog"], 
					["categoryName", "newCategory", "display"]
				)
			});
		ACEController.registerListener('category.EditCategoryClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog"], 
					["categoryName", "newCategory", "display"]
				)
			});
		ACEController.registerListener('category.UpdateCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "categoryDialog"], 
					["categoryName", "newCategory", "display"]
				)
			});
		ACEController.registerListener('category.InviteUserClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsernames"]
				)
			});
		ACEController.registerListener('category.GetInvitedUsernamesOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "invitedUsernames"]
				)
			});
		ACEController.registerListener('category.CancelInviteUserOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsernames"]
				)
			});
		ACEController.registerListener('category.InvitedUsernameChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernameSearchString"]
				)
			});
		ACEController.registerListener('category.InvitedUsernameChangedTooShortEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernames"]
				)
			});
		ACEController.registerListener('category.SearchUsernameOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernames"]
				)
			});
		ACEController.registerListener('category.InviteUserOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsernames"]
				)
			});
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.DeleteCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.CheckDropAllowedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
				)
			});
		ACEController.registerListener('category.CheckDropAllowedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropAllowed"]
				)
			});
		ACEController.registerListener('category.MoveCategoryStartedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "movedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories"]
				)
			});
		ACEController.registerListener('category.MoveCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
				)
			});
		ACEController.registerListener('category.MoveCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropAllowed"]
				)
			});
		ACEController.registerListener('category.MoveCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "movedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories"]
				)
			});
		ACEController.registerListener('category.ChangeOrderCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
				)
			});
		ACEController.registerListener('category.ChangeOrderCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropAllowed"]
				)
			});
		ACEController.registerListener('category.ChangeOrderCategoryOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "movedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "childCategories"]
				)
			});
		ACEController.registerListener('category.FilterNonScheduledCardsOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "filterNonScheduled"]
				)
			});
		ACEController.registerListener('category.PriorityChangedOkEvent', (data) => {
				AppState.set(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "priority"]
				)
			});
	}

}




/******* S.D.G. *******/



