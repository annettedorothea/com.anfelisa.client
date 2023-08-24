/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import LoadCardsAction from "../../src/card/actions/LoadCardsAction";
import CreateCardAction from "../../src/card/actions/CreateCardAction";
import UpdateCardAction from "../../src/card/actions/UpdateCardAction";
import UpdateCardPriorityAction from "../../src/card/actions/UpdateCardPriorityAction";
import DeleteCardAction from "../../src/card/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/card/actions/GivenOfNewCardChangedAction";
import GivenImageOfNewCardChangedAction from "../../src/card/actions/GivenImageOfNewCardChangedAction";
import WantedOfNewCardChangedAction from "../../src/card/actions/WantedOfNewCardChangedAction";
import WantedImageOfNewCardChangedAction from "../../src/card/actions/WantedImageOfNewCardChangedAction";
import CancelNewCardAction from "../../src/card/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/card/actions/GivenOfEditedCardChangedAction";
import GivenImageOfEditedCardChangedAction from "../../src/card/actions/GivenImageOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/card/actions/WantedOfEditedCardChangedAction";
import WantedImageOfEditedCardChangedAction from "../../src/card/actions/WantedImageOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/card/actions/CancelEditCardAction";
import EditCardAction from "../../src/card/actions/EditCardAction";
import DeleteCardClickAction from "../../src/card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/card/actions/FilterCardsAction";
import PassValueToDictionaryAction from "../../src/card/actions/PassValueToDictionaryAction";
import ToggleInputOrderAction from "../../src/card/actions/ToggleInputOrderAction";
import ToggleScheduleCardSelectionAction from "../../src/card/actions/ToggleScheduleCardSelectionAction";
import SelectScheduleCardRangeAction from "../../src/card/actions/SelectScheduleCardRangeAction";
import ToggleAllScheduleCardSelectionAction from "../../src/card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/card/actions/ScheduleSelectedCardsAction";
import SortSelectedCardsOutAction from "../../src/card/actions/SortSelectedCardsOutAction";
import MoveCardsStartedAction from "../../src/card/actions/MoveCardsStartedAction";
import MoveCardsClickedAction from "../../src/card/actions/MoveCardsClickedAction";
import MoveCardsCancelledAction from "../../src/card/actions/MoveCardsCancelledAction";
import ExpandTreeItemAction from "../../src/card/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/card/actions/CollapseTreeItemAction";
import SelectTargetCategoryAction from "../../src/card/actions/SelectTargetCategoryAction";
import MoveCardsAction from "../../src/card/actions/MoveCardsAction";
import ChangeCardOrderAction from "../../src/card/actions/ChangeCardOrderAction";
import OnDragEnterAction from "../../src/card/actions/OnDragEnterAction";
import OnDragExitAction from "../../src/card/actions/OnDragExitAction";
import SearchDuplicateCardsAction from "../../src/card/actions/SearchDuplicateCardsAction";
import TranslateAction from "../../src/card/actions/TranslateAction";

export function loadCards() {
    return new LoadCardsAction().apply({});
}

export function createCard() {
    return new CreateCardAction().apply({});
}

export function updateCard() {
    return new UpdateCardAction().apply({});
}

export function updateCardPriority(cardId, priority) {
    return new UpdateCardPriorityAction().apply({cardId, priority});
}

export function deleteCard() {
    return new DeleteCardAction().apply({});
}

export function givenOfNewCardChanged(given) {
    return new GivenOfNewCardChangedAction().apply({given});
}

export function givenImageOfNewCardChanged(givenImage) {
    return new GivenImageOfNewCardChangedAction().apply({givenImage});
}

export function wantedOfNewCardChanged(wanted) {
    return new WantedOfNewCardChangedAction().apply({wanted});
}

export function wantedImageOfNewCardChanged(wantedImage) {
    return new WantedImageOfNewCardChangedAction().apply({wantedImage});
}

export function cancelNewCard() {
    return new CancelNewCardAction().apply({});
}

export function givenOfEditedCardChanged(given) {
    return new GivenOfEditedCardChangedAction().apply({given});
}

export function givenImageOfEditedCardChanged(givenImage) {
    return new GivenImageOfEditedCardChangedAction().apply({givenImage});
}

export function wantedOfEditedCardChanged(wanted) {
    return new WantedOfEditedCardChangedAction().apply({wanted});
}

export function wantedImageOfEditedCardChanged(wantedImage) {
    return new WantedImageOfEditedCardChangedAction().apply({wantedImage});
}

export function cancelEditCard() {
    return new CancelEditCardAction().apply({});
}

export function editCard(cardId) {
    return new EditCardAction().apply({cardId});
}

export function deleteCardClick(cardId) {
    return new DeleteCardClickAction().apply({cardId});
}

export function cancelDeleteCard() {
    return new CancelDeleteCardAction().apply({});
}

export function filterCards(filter) {
    return new FilterCardsAction().apply({filter});
}

export function passValueToDictionary() {
    return new PassValueToDictionaryAction().apply({});
}

export function toggleInputOrder() {
    return new ToggleInputOrderAction().apply({});
}

export function toggleScheduleCardSelection(cardId) {
    return new ToggleScheduleCardSelectionAction().apply({cardId});
}

export function selectScheduleCardRange(cardId) {
    return new SelectScheduleCardRangeAction().apply({cardId});
}

export function toggleAllScheduleCardSelection() {
    return new ToggleAllScheduleCardSelectionAction().apply({});
}

export function scheduleSelectedCards() {
    return new ScheduleSelectedCardsAction().apply({});
}

export function sortSelectedCardsOut() {
    return new SortSelectedCardsOutAction().apply({});
}

export function moveCardsStarted() {
    return new MoveCardsStartedAction().apply({});
}

export function moveCardsClicked() {
    return new MoveCardsClickedAction().apply({});
}

export function moveCardsCancelled() {
    return new MoveCardsCancelledAction().apply({});
}

export function expandTreeItem(categoryId) {
    return new ExpandTreeItemAction().apply({categoryId});
}

export function collapseTreeItem(categoryId) {
    return new CollapseTreeItemAction().apply({categoryId});
}

export function selectTargetCategory(categoryId) {
    return new SelectTargetCategoryAction().apply({categoryId});
}

export function moveCards() {
    return new MoveCardsAction().apply({});
}

export function changeCardOrder() {
    return new ChangeCardOrderAction().apply({});
}

export function onDragEnter(dragTargetCardId) {
    return new OnDragEnterAction().apply({dragTargetCardId});
}

export function onDragExit(dragTargetCardId) {
    return new OnDragExitAction().apply({dragTargetCardId});
}

export function searchDuplicateCards() {
    return new SearchDuplicateCardsAction().apply({});
}

export function translate() {
    return new TranslateAction().apply({});
}





/******* S.D.G. *******/



