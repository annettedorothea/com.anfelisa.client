/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {button, i, input, pre, td, textarea, tr} from "../../../../../../gen/components/ReactHelper";
import {
    cancelEditCard,
    cancelNewCard,
    changeCardOrder, createCard,
    deleteCardClick,
    editCard, givenOfEditedCardChanged, givenOfNewCardChanged,
    moveCardsStarted,
    onDragEnter,
    onDragExit,
    toggleScheduleCardSelection, updateCard,
    updateCardPriority, wantedOfEditedCardChanged
} from "../../../../../../gen/card/ActionFunctions";
import React from "react";
import {Texts} from "../../../../../app/Texts";

export function uiElement(attributes) {

    const editMode = attributes.cardId === attributes.editedCard.cardId && attributes.editable;

    const onDragStart = (event) => {
        if (attributes.editable) {
            event.dataTransfer.setData("Text", attributes.given);
            moveCardsStarted();
        }
    }

    const onDrop = (event) => {
        if (attributes.editable) {
            event.preventDefault();
            onDragExit(attributes.cardId);
            changeCardOrder(attributes.cardId);
        }
    }

    const onDragOver = (event) => {
        if (attributes.editable) {
            event.preventDefault();
            if (attributes.cardId !== attributes.dragTargetCardId) {
                onDragEnter(attributes.cardId);
            }
        }
    }

    const onDragLeave = () => {
        if (attributes.editable) {
            onDragExit(attributes.cardId);
        }
    }

    const onAltKeyUp = (e) => {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && isValid()) {
            onUpdate();
        }
        if (e.keyCode === 27) {
            onCancel();
        }
    }

    const onUpdate = () => {
        updateCard();
        document.getElementById(attributes.naturalInputOrder === true ? "given" : "wanted").focus();
    }

    const onCancel = () => {
        cancelEditCard();
        document.getElementById(attributes.naturalInputOrder === true ? "given" : "wanted").focus();
    }


    const isValid = () => {
        return attributes.given && attributes.given.length > 0 && (attributes.wanted && attributes.wanted.length > 0 || attributes.image.length > 0);
    }

    const renderGiven = () => {
        if (editMode === true) {
            return td({class: "textarea input"}, [
                textarea({
                    onChange: (event) => givenOfEditedCardChanged(event.target.value),
                    autoComplete: "off",
                    value: attributes.editedCard.given,
                    placeholder: `${Texts.cardList.given[attributes.language]} ${attributes.dictionaryLookup ? "(" + Texts.categoryList.languages[attributes.givenLanguage][attributes.language] + ")" : ""}`,
                    onKeyUp: onAltKeyUp,
                    id: "given-edit"
                })
            ]);

        }
        return td({
            onDoubleClick: () => attributes.editable ? editCard(attributes.cardId) : {}
        }, [
            pre({}, [attributes.given])
        ]);
    }

    const renderWanted = () => {
        if (editMode === true) {
            return td({class: "textarea input"}, [
                textarea({
                    onChange: (event) => wantedOfEditedCardChanged(event.target.value),
                    autoComplete: "off",
                    value: attributes.editedCard.wanted,
                    placeholder: `${Texts.cardList.wanted[attributes.language]} ${attributes.dictionaryLookup ? "(" + Texts.categoryList.languages[attributes.wantedLanguage][attributes.language] + ")" : ""}`,
                    onKeyUp: onAltKeyUp,
                    id: "wanted-edit"
                })
            ]);

        }
        return td({
            onDoubleClick: () => attributes.editable ? editCard(attributes.cardId) : {}
        }, [
            pre({}, [attributes.wanted])
        ]);
    }

    const priority = () => {
        const priorityChanged = (priority) => {
            if (attributes.editable) {
                updateCardPriority(attributes.cardId, priority);
            }
        }
        const priorityClass = (index) => {
            if (attributes.priority && index <= attributes.priority) {
                return "fa fa-star";
            }
            return "far fa-star";
        }
        return td({class: "priority noBreak"}, [
            i({
                class: priorityClass(1),
                onClick: attributes.editable ? () => priorityChanged(attributes.priority === 1 ? null : 1) : () => {
                }
            }),
            i({
                class: priorityClass(2),
                onClick: attributes.editable ? () => priorityChanged(attributes.priority === 2 ? null : 2) : () => {
                }
            }),
            i({
                class: priorityClass(3),
                onClick: attributes.editable ? () => priorityChanged(attributes.priority === 3 ? null : 3) : () => {
                }
            }),
        ]);
    }

    return tr({
        onDragOver,
        onDrop,
        onDragLeave,
        class: attributes.cardId === attributes.dragTargetCardId ? "dragTarget" : ""
    }, [
        td({class: "notPrinted"}, [
            input({
                type: "checkbox",
                onChange: () => toggleScheduleCardSelection(attributes.cardId),
                checked: attributes.selectedCardIds.indexOf(attributes.cardId) >= 0
            })
        ]),
        attributes.naturalInputOrder === true ? renderGiven() : renderWanted(),
        attributes.naturalInputOrder === true ? renderWanted() : renderGiven(),
        priority(),
        attributes.editable ? editMode === false ?
            td({
                class: "noBreak notPrinted"
            }, [
                button({
                    onClick: () => editCard(attributes.cardId)
                }, [
                    i({class: "fas fa-pen"})
                ]),
                button({
                    onClick: () => deleteCardClick(attributes.cardId)
                }, [
                    i({class: "fas fa-times"})
                ]),
                attributes.selectedCardIds.indexOf(attributes.cardId) >= 0 ?
                    i({
                        id: attributes.cardId,
                        class: "fas fa-align-justify",
                        draggable: "true",
                        onDragStart: (event) => this.onDragStart(event)
                    }) :
                    null
            ]) :
            td({
                class: "noBreak notPrinted"
            }, [
                button({
                    disabled: !isValid(),
                    onClick: onUpdate
                }, [
                    i({class: "fas fa-check"})
                ]),
                button({
                    onClick: onCancel
                }, [
                    i({class: "fas fa-times"})
                ])
            ])
            : null,
        td({class: "noBreak notPrinted alignRight"}, [
            attributes.next ? new Date(attributes.next).toLocaleDateString() : ""
        ])
    ]);
}


/******* S.D.G. *******/



