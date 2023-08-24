import React from "react";

import {SelectableCategoryItem} from "./SelectableCategoryItem";

export const CollapsedCategoryItem = (props) => {
    return <div className="collapsedCategoryItem">
        {props.empty === false ?
            <i
                className="fas fa-caret-right"
                onClick={() => props.expandTreeItem(props.categoryId)}
            /> :
            <i className="fas fa-caret-right disabled"/>
        }
        <SelectableCategoryItem {...props} />
    </div>
}
