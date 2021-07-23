/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import LoadCardsAction from "../../src/card/actions/LoadCardsAction";
import CreateCardAction from "../../src/card/actions/CreateCardAction";
import UpdateCardAction from "../../src/card/actions/UpdateCardAction";
import UpdateCardPriorityAction from "../../src/card/actions/UpdateCardPriorityAction";
import DeleteCardAction from "../../src/card/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/card/actions/GivenOfNewCardChangedAction";
import WantedOfNewCardChangedAction from "../../src/card/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/card/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/card/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/card/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/card/actions/CancelEditCardAction";
import EditCardAction from "../../src/card/actions/EditCardAction";
import DeleteCardClickAction from "../../src/card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/card/actions/FilterCardsAction";
import PassValueToDictionaryAction from "../../src/card/actions/PassValueToDictionaryAction";
import ToggleInputOrderAction from "../../src/card/actions/ToggleInputOrderAction";
import ToggleScheduleCardSelectionAction from "../../src/card/actions/ToggleScheduleCardSelectionAction";
import ToggleAllScheduleCardSelectionAction from "../../src/card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/card/actions/ScheduleSelectedCardsAction";
import SortSelectedCardsOutAction from "../../src/card/actions/SortSelectedCardsOutAction";
import MoveCardsStartedAction from "../../src/card/actions/MoveCardsStartedAction";
import MoveCardsAction from "../../src/card/actions/MoveCardsAction";
import ChangeCardOrderAction from "../../src/card/actions/ChangeCardOrderAction";
import OnDragEnterAction from "../../src/card/actions/OnDragEnterAction";
import OnDragExitAction from "../../src/card/actions/OnDragExitAction";
import SearchDuplicateCardsAction from "../../src/card/actions/SearchDuplicateCardsAction";

export function loadCards() {
    new LoadCardsAction().apply({});
}

export function createCard() {
    new CreateCardAction().apply({});
}

export function updateCard() {
    new UpdateCardAction().apply({});
}

export function updateCardPriority(cardId, priority) {
    new UpdateCardPriorityAction().apply({cardId, priority});
}

export function deleteCard() {
    new DeleteCardAction().apply({});
}

export function givenOfNewCardChanged(given) {
    new GivenOfNewCardChangedAction().apply({given});
}

export function wantedOfNewCardChanged(wanted) {
    new WantedOfNewCardChangedAction().apply({wanted});
}

export function cancelNewCard() {
    new CancelNewCardAction().apply({});
}

export function givenOfEditedCardChanged(given) {
    new GivenOfEditedCardChangedAction().apply({given});
}

export function wantedOfEditedCardChanged(wanted) {
    new WantedOfEditedCardChangedAction().apply({wanted});
}

export function cancelEditCard() {
    new CancelEditCardAction().apply({});
}

export function editCard(cardId) {
    new EditCardAction().apply({cardId});
}

export function deleteCardClick(cardId) {
    new DeleteCardClickAction().apply({cardId});
}

export function cancelDeleteCard() {
    new CancelDeleteCardAction().apply({});
}

export function filterCards(filter) {
    new FilterCardsAction().apply({filter});
}

export function passValueToDictionary() {
    new PassValueToDictionaryAction().apply({});
}

export function toggleInputOrder() {
    new ToggleInputOrderAction().apply({});
}

export function toggleScheduleCardSelection(cardId) {
    new ToggleScheduleCardSelectionAction().apply({cardId});
}

export function toggleAllScheduleCardSelection() {
    new ToggleAllScheduleCardSelectionAction().apply({});
}

export function scheduleSelectedCards() {
    new ScheduleSelectedCardsAction().apply({});
}

export function sortSelectedCardsOut() {
    new SortSelectedCardsOutAction().apply({});
}

export function moveCardsStarted() {
    new MoveCardsStartedAction().apply({});
}

export function moveCards() {
    new MoveCardsAction().apply({});
}

export function changeCardOrder() {
    new ChangeCardOrderAction().apply({});
}

export function onDragEnter(dragTargetCardId) {
    new OnDragEnterAction().apply({dragTargetCardId});
}

export function onDragExit(dragTargetCardId) {
    new OnDragExitAction().apply({dragTargetCardId});
}

export function searchDuplicateCards() {
    new SearchDuplicateCardsAction().apply({});
}





/******* S.D.G. *******/



