/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {ExpandedCategoryItem} from "../../../../../common/ExpandedCategoryItem";
import {CollapsedCategoryItem} from "../../../../../common/CollapsedCategoryItem";

export const ChildCategoriesItem = (props) => {
    return <div
        className={`categoryItem depth_${props.depth}`}
    >
        {props.expanded === true ?
            <>
                <ExpandedCategoryItem {...props}/>
                <div>
                    {props.children}
                </div>
            </> :
            <CollapsedCategoryItem {...props}/>
        }
    </div>
}



/******* S.D.G. *******/



