import React from "react";

import {translate} from "../../AppUtils";
import {Texts} from "../../app/Texts";
import "./rootCategoryTree.scss"

export const SelectableCategoryItem = (props) => {
    const selected = props.selectedCategory && props.selectedCategory.categoryId === props.categoryId
    return <div className="itemContainer">
        <div
            className={`item ${selected ? "selected" : "notSelected"}`}
            onClick={() => selected ? "" : props.selectTreeItem(props.categoryId)}
        >
            {props.categoryName}
        </div>
        {props.nonScheduledCount > 0 && <div className="nonScheduledCount">{props.nonScheduledCount}</div>}
    </div>
}
