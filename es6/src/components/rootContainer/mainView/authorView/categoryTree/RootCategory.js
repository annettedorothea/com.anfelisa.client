/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {div, i, span} from "../../../../../../gen/components/ReactHelper";
import {
    changeOrderCategory,
    checkDropAllowed,
    collapseTreeItem,
    expandTreeItem,
    itemDropped,
    moveCategoryStarted,
    selectTreeItem
} from "../../../../../../gen/category/ActionFunctions";
import React from "react";
import {Texts} from "../../../../../app/Texts";

const categoryItem = (attributes) => {
    const selected = attributes.selectedCategory && attributes.selectedCategory.categoryId === attributes.categoryId;
    const dropAllowed = attributes.dropAllowed && attributes.selectedCategory.editable;
    return div({class: `categoryItem depth_${attributes.depth}`}, [
        attributes.expanded === true ?
            expandedCategoryItem({
                ...attributes,
                selected,
                depth: attributes.depth + 1,
                dropAllowed
            }) :
            collapsedCategoryItem({
                ...attributes,
                selected,
                dropAllowed,
                depth: attributes.depth + 1
            })
    ]);
}

const collapsedCategoryItem = (attributes) => {
    return div({class: "collapsedCategoryItem"}, [
        attributes.empty === false ?
            i({
                class: "fas fa-caret-right",
                onClick: () => expandTreeItem(attributes.categoryId)
            }) :
            i({
                class: "fas fa-caret-right disabled"
            }),
        selectableCategoryItem({
            selected: attributes.selected,
            categoryName: attributes.categoryName,
            nonScheduledCount: attributes.nonScheduledCount,
            categoryId: attributes.categoryId,
            dropAllowed: attributes.dropAllowed,
            dropTargetCategoryId: attributes.dropTargetCategoryId,
            depth: attributes.depth,
            language: attributes.language,
        })

    ]);
}

const selectableCategoryItem = (attributes) => {
    const onDragStart = (event) => {
        event.dataTransfer.setData('Text', attributes.categoryName);
        moveCategoryStarted(attributes.categoryId)
    }

    const drop = (event) => {
        event.preventDefault();
        itemDropped(event.altKey);
    }

    const onDragOver = (event) => {
        if (!!attributes.dropAllowed) {
            event.preventDefault();
        }
    }

    const onDragEnter = (event) => {
        checkDropAllowed(attributes.categoryId, event.altKey);
    }

    return span({
        draggable: true,
        onDragStart: (event) => onDragStart(event),
        onDragEnter: (event) => onDragEnter(event),
        onDragOver: onDragOver,
        onDrop: drop
    }, [
        span({
            class: `item ${attributes.selected ? "selected" : "notSelected"} ${attributes.dropAllowed && attributes.dropTargetCategoryId === attributes.categoryId ? "dropAllowed" : ""}`,
            onClick: () => attributes.selected ? "" : selectTreeItem(attributes.categoryId)
        }, [
            attributes.categoryName,
            attributes.nonScheduledCount === 0 ?
                span({class: "nonScheduledCount"}, [
                    Texts.categoryList.nonScheduledNone[attributes.language]
                ]) : null,
            attributes.nonScheduledCount === 1 ?
                span({class: "nonScheduledCount"}, [
                    Texts.categoryList.nonScheduledSingular[attributes.language]
                ]) : null,
            attributes.nonScheduledCount > 1 ?
                span({class: "nonScheduledCount"}, [
                    Texts.categoryList.nonScheduled[attributes.language].replace("{0}", attributes.nonScheduledCount)
                ]) : null,
        ])
    ]);
}

const expandedCategoryItem = (attributes) => {
    let children = [];
    if (attributes.childCategories) {
        children = attributes.childCategories.map((category) => {
            return categoryItem({
                ...category,
                depth: attributes.depth,
                language: attributes.language,
                selectedCategory: attributes.selectedCategory,
                dropAllowed: attributes.dropAllowed,
                dropTargetCategoryId: attributes.dropTargetCategoryId
            });
        });
    }
    return div({class: "expandedCategoryItem"}, [
        attributes.depth > 1 ? i({
            class: "fas fa-caret-down",
            onClick: () => collapseTreeItem(attributes.categoryId)
        }) : null,
        selectableCategoryItem({...attributes}),
        div({}, children)
    ]);
}

export function uiElement(attributes) {
    const selected = attributes.selectedCategory && attributes.selectedCategory.categoryId === attributes.categoryId;
    return div({class: "categoryItem depth_1"}, [
        expandedCategoryItem({
            ...attributes,
            selected,
            depth: 1
        }),
    ]);
}


/******* S.D.G. *******/


