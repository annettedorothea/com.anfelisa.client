/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {collapsedCategoryItem, expandedCategoryItem} from "../RootCategory";

export const ChildCategoriesItem = (props) => {
    return <div
        className={`categoryItem depth_${props.depth}`}
    >
        {props.expanded === true ?
            expandedCategoryItem({...props}) :
            collapsedCategoryItem({...props})}
    </div>

}


/******* S.D.G. *******/



