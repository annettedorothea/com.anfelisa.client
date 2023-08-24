import React from "react";

import {translate} from "../../AppUtils";
import {Texts} from "../../app/Texts";
import "./rootCategoryTree.scss"

export const SelectableCategoryItem = (props) => {
    const selected = props.selectedCategory && props.selectedCategory.categoryId === props.categoryId
    return <span>
        <span
            className={`item ${selected ? "selected" : "notSelected"}`}
            onClick={() => selected ? "" : props.selectTreeItem(props.categoryId)}
        >
            {props.categoryName}
            {props.nonScheduledCount === 0 ?
                <span className="nonScheduledCount">{translate(Texts.categoryList.nonScheduledNone)}</span> : null
            }
            {props.nonScheduledCount === 1 ?
                <span
                    className="nonScheduledCount">{translate(Texts.categoryList.nonScheduledSingular)}</span> : null
            }
            {props.nonScheduledCount > 1 ?
                <span
                    className="nonScheduledCount">{translate(Texts.categoryList.nonScheduled, [props.nonScheduledCount])}</span> : null
            }
        </span>
    </span>
}
