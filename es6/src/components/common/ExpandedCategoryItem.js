import React from "react";

import {SelectableCategoryItem} from "./SelectableCategoryItem";

export const ExpandedCategoryItem = (props) => {
    return <div className="expandedCategoryItem">
        {props.depth > 0 ?
            <i
                className="fas fa-caret-down"
                onClick={() => props.collapseTreeItem(props.categoryId)}
            /> : null
        }
        <SelectableCategoryItem {...props} />
    </div>
}
