/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const CategoryDialog = (props) => {
    if (props.display !== true) {
        return null;
    }
    const disabled =
        !props.categoryName ||
        props.categoryName.length === 0;

    return <div className="modal">
        <div className="modalContent form">
            <h2>{props.newCategory ? translate(Texts.categoryTree.newCategory.title) : translate(Texts.categoryTree.editCategory.title)}</h2>
            <input
                type="text"
                onChange={(event) => props.categoryNameChanged(event.target.value)}
                autoComplete="off"
                value={props.categoryName}
                placeholder={translate(Texts.categoryTree.newCategory.newChildCategory)}
                id="categoryName"
            />
            <div className="buttonContainer">
                <button
                    className="primary"
                    disabled={disabled}
                    onClick={() => props.newCategory ? props.createCategory() : props.updateCategory()}
                    id="ok"
                >
                    {translate(Texts.categoryTree.newCategory.ok)}
                </button>
                <button
                    onClick={props.cancelCategoryDialog}
                >
                    {translate(Texts.categoryTree.newCategory.cancel)}
                </button>
            </div>
        </div>
    </div>;
}


/******* S.D.G. *******/



