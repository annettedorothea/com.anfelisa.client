import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";
import NameOfNewCategoryChangedAction from "../../src/author/actions/NameOfNewCategoryChangedAction";
import IndexOfNewCategoryChangedAction from "../../src/author/actions/IndexOfNewCategoryChangedAction";
import CancelNewCategoryAction from "../../src/author/actions/CancelNewCategoryAction";
import NameOfEditedCategoryChangedAction from "../../src/author/actions/NameOfEditedCategoryChangedAction";
import IndexOfEditedCategoryChangedAction from "../../src/author/actions/IndexOfEditedCategoryChangedAction";
import CancelEditCategoryAction from "../../src/author/actions/CancelEditCategoryAction";
import EditCategoryAction from "../../src/author/actions/EditCategoryAction";
import DeleteCategoryClickAction from "../../src/author/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/author/actions/CancelDeleteCategoryAction";
import LoadCardsAction from "../../src/author/actions/LoadCardsAction";
import CreateCardAction from "../../src/author/actions/CreateCardAction";
import UpdateCardAction from "../../src/author/actions/UpdateCardAction";
import DeleteCardAction from "../../src/author/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/author/actions/GivenOfNewCardChangedAction";
import WantedOfNewCardChangedAction from "../../src/author/actions/WantedOfNewCardChangedAction";
import IndexOfNewCardChangedAction from "../../src/author/actions/IndexOfNewCardChangedAction";
import CancelNewCardAction from "../../src/author/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/author/actions/GivenOfEditedCardChangedAction";
import WamtedOfEditedCardChangedAction from "../../src/author/actions/WamtedOfEditedCardChangedAction";
import IndexOfEditedCardChangedAction from "../../src/author/actions/IndexOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/author/actions/CancelEditCardAction";
import EditCardAction from "../../src/author/actions/EditCardAction";
import DeleteCardClickAction from "../../src/author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/author/actions/CancelDeleteCardAction";

export function loadCategories(actionParam) {
    new LoadCategoriesAction(actionParam).apply();
}

export function createCategory(actionParam) {
    new CreateCategoryAction(actionParam).apply();
}

export function updateCategory(actionParam) {
    new UpdateCategoryAction(actionParam).apply();
}

export function deleteCategory(actionParam) {
    new DeleteCategoryAction(actionParam).apply();
}

export function nameOfNewCategoryChanged(actionParam) {
    new NameOfNewCategoryChangedAction(actionParam).apply();
}

export function indexOfNewCategoryChanged(actionParam) {
    new IndexOfNewCategoryChangedAction(actionParam).apply();
}

export function cancelNewCategory(actionParam) {
    new CancelNewCategoryAction(actionParam).apply();
}

export function nameOfEditedCategoryChanged(actionParam) {
    new NameOfEditedCategoryChangedAction(actionParam).apply();
}

export function indexOfEditedCategoryChanged(actionParam) {
    new IndexOfEditedCategoryChangedAction(actionParam).apply();
}

export function cancelEditCategory(actionParam) {
    new CancelEditCategoryAction(actionParam).apply();
}

export function editCategory(actionParam) {
    new EditCategoryAction(actionParam).apply();
}

export function deleteCategoryClick(actionParam) {
    new DeleteCategoryClickAction(actionParam).apply();
}

export function cancelDeleteCategory(actionParam) {
    new CancelDeleteCategoryAction(actionParam).apply();
}

export function loadCards(actionParam) {
    new LoadCardsAction(actionParam).apply();
}

export function createCard(actionParam) {
    new CreateCardAction(actionParam).apply();
}

export function updateCard(actionParam) {
    new UpdateCardAction(actionParam).apply();
}

export function deleteCard(actionParam) {
    new DeleteCardAction(actionParam).apply();
}

export function givenOfNewCardChanged(actionParam) {
    new GivenOfNewCardChangedAction(actionParam).apply();
}

export function wantedOfNewCardChanged(actionParam) {
    new WantedOfNewCardChangedAction(actionParam).apply();
}

export function indexOfNewCardChanged(actionParam) {
    new IndexOfNewCardChangedAction(actionParam).apply();
}

export function cancelNewCard(actionParam) {
    new CancelNewCardAction(actionParam).apply();
}

export function givenOfEditedCardChanged(actionParam) {
    new GivenOfEditedCardChangedAction(actionParam).apply();
}

export function wamtedOfEditedCardChanged(actionParam) {
    new WamtedOfEditedCardChangedAction(actionParam).apply();
}

export function indexOfEditedCardChanged(actionParam) {
    new IndexOfEditedCardChangedAction(actionParam).apply();
}

export function cancelEditCard(actionParam) {
    new CancelEditCardAction(actionParam).apply();
}

export function editCard(actionParam) {
    new EditCardAction(actionParam).apply();
}

export function deleteCardClick(actionParam) {
    new DeleteCardClickAction(actionParam).apply();
}

export function cancelDeleteCard(actionParam) {
    new CancelDeleteCardAction(actionParam).apply();
}


/*       S.D.G.       */