/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../../src/AppState";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree"], 
					["reverse", "reverseBoxExists", "buttons", "filter", "rootCategory", "displayDeleteCategory", "categoryDialog", "inviteUserDialog", "inviteUserEditableDialog", "deleteCategoryDialog", "dropAllowed", "dropTargetCategoryId", "selectedCategory", "movedCategory", "cardView"]
				)
			});
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "cardView"], 
					["rootCategory", "selectedCategory", "reverse", "naturalInputOrder", "cardTable", "deleteCard", "dictionaryValue", "selectedCardIds", "movedCardIds", "dragTargetCardId", "editedCard"]
				)
			});
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "boxId"]
				)
			});
		ACEController.registerListener('category.ReloadCategoryTreeOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["selectedCategory", "dropAllowed", "dropTargetCategoryId", "categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "nonScheduledCount", "editable", "childCategories"]
				)
			});
		ACEController.registerListener('category.ReloadCategoryTreeOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "rootCategoryId", "childCategories", "nonScheduledCount", "editable", "dictionaryLookup", "givenLanguage", "wantedLanguage"]
				)
			});
		ACEController.registerListener('category.ExpandTreeItemOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["selectedCategory", "dropAllowed", "dropTargetCategoryId", "categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "nonScheduledCount", "editable", "childCategories"]
				)
			});
		ACEController.registerListener('category.CollapseTreeItemOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["selectedCategory", "dropAllowed", "dropTargetCategoryId", "categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "nonScheduledCount", "editable", "childCategories"]
				)
			});
		ACEController.registerListener('category.CollapseTreeItemSelectParentCategoryEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "rootCategory"], 
					["selectedCategory", "dropAllowed", "dropTargetCategoryId", "categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "dictionaryLookup", "givenLanguage", "wantedLanguage", "rootCategoryId", "nonScheduledCount", "editable", "childCategories"]
				)
			});
		ACEController.registerListener('category.SelectTreeItemOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "selectedCategory"], 
					["categoryId", "categoryName", "categoryIndex", "empty", "parentCategoryId", "rootCategoryId", "childCategories", "nonScheduledCount", "editable", "dictionaryLookup", "givenLanguage", "wantedLanguage"]
				)
			});
		ACEController.registerListener('category.NewCategoryClickOkEvent', (data) => {
				AppState.merge(
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
				AppState.merge(
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
				AppState.merge(
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
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsers"]
				)
			});
		ACEController.registerListener('category.GetInvitedUsernamesOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "invitedUsers"]
				)
			});
		ACEController.registerListener('category.CancelInviteUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsers"]
				)
			});
		ACEController.registerListener('category.CancelInviteUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog"], 
					["invitedUsername", "editable", "display"]
				)
			});
		ACEController.registerListener('category.InvitedUsernameChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernameSearchString"]
				)
			});
		ACEController.registerListener('category.InvitedUsernameChangedTooShortEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernames"]
				)
			});
		ACEController.registerListener('category.SearchUsernameOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog", "usernames"]
				)
			});
		ACEController.registerListener('category.InviteUserNextStepOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog"], 
					["invitedUsername", "editable", "display"]
				)
			});
		ACEController.registerListener('category.InviteUserNextStepOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserDialog"], 
					["display", "usernameSearchString", "usernames", "invitedUsers"]
				)
			});
		ACEController.registerListener('category.InviteUserChangeEditableOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog", "editable"]
				)
			});
		ACEController.registerListener('category.InviteUserOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "inviteUserEditableDialog"], 
					["invitedUsername", "editable", "display"]
				)
			});
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.DeleteCategoryOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "deleteCategoryDialog"], 
					["display"]
				)
			});
		ACEController.registerListener('category.CheckDropAllowedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropTargetCategoryId"]
				)
			});
		ACEController.registerListener('category.CheckDropAllowedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "dropAllowed"]
				)
			});
		ACEController.registerListener('category.MoveCategoryStartedOkEvent', (data) => {
				AppState.merge(
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
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "filter", "filterNonScheduled", "value"]
				)
			});
		ACEController.registerListener('category.PriorityChangedOkEvent', (data) => {
				AppState.merge(
					data, 
					["rootContainer", "mainView", "authorView", "categoryTree", "filter", "priority", "value"]
				)
			});
	}

}




/******* S.D.G. *******/



