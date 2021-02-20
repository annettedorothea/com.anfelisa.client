/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {
    button,
    categoryDialog,
    deleteCategoryDialog,
    div,
    i, input,
    inviteUserDialog, label,
    rootCategory, span
} from "../../../../../gen/components/ReactHelper";
import {
    createReverseBox,
    deleteCategoryClick,
    editCategoryClick, filterNonScheduledCards,
    inviteUserClick,
    newCategoryClick, priorityChanged
} from "../../../../../gen/category/ActionFunctions";
import {route} from "../../../../../gen/common/ActionFunctions";
import React from "react";
import {Texts} from "../../../../app/Texts";

export function uiElement(attributes) {

    if (!attributes.rootCategory) {
        return null;
    }

    const filterPriority = (priority) => {
        const priorityClass = (index) => {
            if (priority && index <= priority) {
                return "fa fa-star";
            }
            return "far fa-star";
        }
        return span({class: "priority noBreak"}, [
            i({
                class: priorityClass(1),
                onClick: () => priorityChanged(priority === 1 ? null: 1)
            }),
            i({
                class: priorityClass(2),
                onClick: () => priorityChanged(priority === 2 ? null: 2)
            }),
            i({
                class: priorityClass(3),
                onClick: () => priorityChanged(priority === 3 ? null: 3)
            }),
        ]);
    }

    return div({class: "categoryTree"}, [
        categoryDialog({...attributes.categoryDialog, language: attributes.language}),
        inviteUserDialog({...attributes.inviteUserDialog, language: attributes.language}),
        deleteCategoryDialog({...attributes.deleteCategoryDialog, language: attributes.language}),

        div({}, [
            button({
                onClick: () => route("#dashboard"),
                title: Texts.categoryTree.back[attributes.language]
            }, [
                i({class: "fa fa-arrow-left"})
            ]),
            attributes.rootCategory.editable ?
                button({
                    disabled: !attributes.selectedCategory,
                    onClick: () => newCategoryClick(),
                    title: Texts.categoryTree.newCategory.newChildCategory[attributes.language]
                }, [
                    i({class: "fas fa-plus"})
                ]) :
                null,
            attributes.rootCategory.editable ?
                button({
                    disabled: !attributes.selectedCategory,
                    onClick: () => editCategoryClick(),
                    title: Texts.categoryTree.editCategory.title[attributes.language]
                }, [
                    i({class: "fas fa-pen"})
                ]) :
                null,
            attributes.rootCategory.editable ?
                button({
                    disabled: !attributes.selectedCategory,
                    onClick: () => inviteUserClick(),
                    title: Texts.categoryTree.inviteUser.title[attributes.language]
                }, [
                    i({class: "fas fa-share"})
                ]) :
                null,
            attributes.rootCategory.editable ?
                button({
                    disabled: !attributes.selectedCategory || !attributes.selectedCategory.empty || attributes.rootCategory.categoryId === attributes.selectedCategory.categoryId,
                    onClick: () => deleteCategoryClick(),
                    title: Texts.categoryTree.delete[attributes.language]
                }, [
                    i({class: "far fa-trash-alt"})
                ]) :
                null,
            attributes.reverseBoxExists === false ?
                button({
                    onClick: () => createReverseBox(),
                    title: Texts.categoryTree.createReverseBox[attributes.language]
                }, [
                    i({class: "fas fa-plus-circle"})
                ]) :
                null,
        ]),
        
        div({class:"form"}, [
            input({
                type: "checkbox",
                onClick: (event) => filterNonScheduledCards(event.target.value),
                value: attributes.filterNonScheduled,
                id: "filterNonScheduled"
            }),
            label({
                htmlFor:"filterNonScheduled"}, [
                Texts.categoryTree.filterNonScheduled[attributes.language]
            ]),
            attributes.filterNonScheduled === true ? filterPriority(attributes.priority) : null
        ]),

        div({class: "categoryTreeItems"}, [
            rootCategory({
                ...attributes.rootCategory,
                selectedCategory: attributes.selectedCategory,
                language: attributes.language,
                dropAllowed: attributes.dropAllowed && attributes.rootCategory.editable,
                dropTargetCategoryId: attributes.dropTargetCategoryId,
            })
        ]),
    ]);
}


/******* S.D.G. *******/


