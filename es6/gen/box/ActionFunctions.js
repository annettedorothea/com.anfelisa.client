/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import InitBoxesForDayAction from "../../src/box/actions/InitBoxesForDayAction";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";
import LoadActiveCardsAction from "../../src/box/actions/LoadActiveCardsAction";
import ToggleScheduleCardSelectionAction from "../../src/box/actions/ToggleScheduleCardSelectionAction";
import SelectScheduleCardRangeAction from "../../src/box/actions/SelectScheduleCardRangeAction";
import ToggleAllScheduleCardSelectionAction from "../../src/box/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/box/actions/ScheduleSelectedCardsAction";
import SortSelectedCardsOutAction from "../../src/box/actions/SortSelectedCardsOutAction";
import UpdateCardPriorityAction from "../../src/box/actions/UpdateCardPriorityAction";
import FilterActiveCardListWithLastQualityChangedAction from "../../src/box/actions/FilterActiveCardListWithLastQualityChangedAction";
import FilterActiveCardListAction from "../../src/box/actions/FilterActiveCardListAction";
import BoxClickAction from "../../src/box/actions/BoxClickAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import ArchiveBoxAction from "../../src/box/actions/ArchiveBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import CallScoreCardAction from "../../src/box/actions/CallScoreCardAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import CallScoreReinforceCardAction from "../../src/box/actions/CallScoreReinforceCardAction";
import SortCardOutAction from "../../src/box/actions/SortCardOutAction";
import CallSortCardOutAction from "../../src/box/actions/CallSortCardOutAction";
import InitBoxesForDayDuringScoreAction from "../../src/box/actions/InitBoxesForDayDuringScoreAction";
import LoadSettingsAction from "../../src/box/actions/LoadSettingsAction";
import SaveBoxSettingsAction from "../../src/box/actions/SaveBoxSettingsAction";
import MaxCardsPerDayChangedAction from "../../src/box/actions/MaxCardsPerDayChangedAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import TooManyCardsStatusAction from "../../src/box/actions/TooManyCardsStatusAction";
import CreateRootCategoryAction from "../../src/box/actions/CreateRootCategoryAction";
import CategoryNameChangedAction from "../../src/box/actions/CategoryNameChangedAction";
import DictionaryLookupChangedAction from "../../src/box/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../src/box/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../src/box/actions/WantedLanguageChangedAction";
import RootCategoryNameChangedAction from "../../src/box/actions/RootCategoryNameChangedAction";

export function initBoxesForDay() {
    return new InitBoxesForDayAction().apply({});
}

export function loadBoxes() {
    return new LoadBoxesAction().apply({});
}

export function loadBoxStatistics() {
    return new LoadBoxStatisticsAction().apply({});
}

export function loadActiveCards() {
    return new LoadActiveCardsAction().apply({});
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

export function updateCardPriority(cardId, priority, actualPriority) {
    return new UpdateCardPriorityAction().apply({cardId, priority, actualPriority});
}

export function filterActiveCardListWithLastQualityChanged(lastQualityFilter) {
    return new FilterActiveCardListWithLastQualityChangedAction().apply({lastQualityFilter});
}

export function filterActiveCardList() {
    return new FilterActiveCardListAction().apply({});
}

export function boxClick(boxId, openTodaysCards, categoryId, reverse) {
    return new BoxClickAction().apply({boxId, openTodaysCards, categoryId, reverse});
}

export function deleteBoxClick(boxId) {
    return new DeleteBoxClickAction().apply({boxId});
}

export function cancelDeleteBox() {
    return new CancelDeleteBoxAction().apply({});
}

export function deleteBox() {
    return new DeleteBoxAction().apply({});
}

export function archiveBox(archived, boxId) {
    return new ArchiveBoxAction().apply({archived, boxId});
}

export function loadNextCard() {
    return new LoadNextCardAction().apply({});
}

export function displayWanted(wantedItemsLength) {
    return new DisplayWantedAction().apply({wantedItemsLength});
}

export function scoreCard(scoredCardQuality) {
    return new ScoreCardAction().apply({scoredCardQuality});
}

export function callScoreCard(scoredCardQuality) {
    return new CallScoreCardAction().apply({scoredCardQuality});
}

export function scoreReinforceCard(keep) {
    return new ScoreReinforceCardAction().apply({keep});
}

export function callScoreReinforceCard(keep) {
    return new CallScoreReinforceCardAction().apply({keep});
}

export function sortCardOut() {
    return new SortCardOutAction().apply({});
}

export function callSortCardOut() {
    return new CallSortCardOutAction().apply({});
}

export function initBoxesForDayDuringScore() {
    return new InitBoxesForDayDuringScoreAction().apply({});
}

export function loadSettings() {
    return new LoadSettingsAction().apply({});
}

export function saveBoxSettings() {
    return new SaveBoxSettingsAction().apply({});
}

export function maxCardsPerDayChanged(maxCardsPerDay) {
    return new MaxCardsPerDayChangedAction().apply({maxCardsPerDay});
}

export function maxIntervalChanged(maxInterval) {
    return new MaxIntervalChangedAction().apply({maxInterval});
}

export function tooManyCardsStatus() {
    return new TooManyCardsStatusAction().apply({});
}

export function createRootCategory() {
    return new CreateRootCategoryAction().apply({});
}

export function categoryNameChanged(categoryName) {
    return new CategoryNameChangedAction().apply({categoryName});
}

export function dictionaryLookupChanged() {
    return new DictionaryLookupChangedAction().apply({});
}

export function givenLanguageChanged(givenLanguage) {
    return new GivenLanguageChangedAction().apply({givenLanguage});
}

export function wantedLanguageChanged(wantedLanguage) {
    return new WantedLanguageChangedAction().apply({wantedLanguage});
}

export function rootCategoryNameChanged(categoryName) {
    return new RootCategoryNameChangedAction().apply({categoryName});
}





/******* S.D.G. *******/



