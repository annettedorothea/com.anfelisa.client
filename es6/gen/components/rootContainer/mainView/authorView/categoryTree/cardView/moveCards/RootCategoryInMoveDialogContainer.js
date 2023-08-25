/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { RootCategoryInMoveDialog } from "../../../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/cardView/moveCards/RootCategoryInMoveDialog";
import { ChildCategoriesItemContainer } from "./rootCategoryInMoveDialog/ChildCategoriesItemContainer";
import { collapseTreeItemInMoveDialog } from "../../../../../../../card/ActionFunctions";
import { expandTreeItemInMoveDialog } from "../../../../../../../card/ActionFunctions";
import { selectTargetCategory } from "../../../../../../../card/ActionFunctions";


export const RootCategoryInMoveDialogContainer = ( props ) => {
	
	return <RootCategoryInMoveDialog {...props} collapseTreeItem={collapseTreeItemInMoveDialog} expandTreeItem={expandTreeItemInMoveDialog} selectTreeItem={selectTargetCategory} >
		{ props.childCategories ? props.childCategories.map((item, index) => <ChildCategoriesItemContainer {...item} key={item.categoryId} depth={1} index={index} selectedCategory={props.selectedCategory} dropAllowed={props.dropAllowed} dropTargetCategoryId={props.dropTargetCategoryId}   collapseTreeItem={collapseTreeItemInMoveDialog} expandTreeItem={expandTreeItemInMoveDialog} selectTreeItem={selectTargetCategory}  />) : [] }
	</RootCategoryInMoveDialog> 
}



/******* S.D.G. *******/



