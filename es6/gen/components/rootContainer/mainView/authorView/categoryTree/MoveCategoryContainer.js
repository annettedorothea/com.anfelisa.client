/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { MoveCategory } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/MoveCategory";
import { RootCategoryInMoveDialogContainer } from "./moveCategory/RootCategoryInMoveDialogContainer";
import { moveCategoryCancelled } from "../../../../../category/ActionFunctions";
import { moveCategory } from "../../../../../category/ActionFunctions";
import { selectTargetCategory } from "../../../../../category/ActionFunctions";


export const MoveCategoryContainer = ( props ) => {
	
	return <MoveCategory {...props} moveCardsCancelled={moveCategoryCancelled} moveCards={moveCategory} >
		<RootCategoryInMoveDialogContainer {...props.rootCategoryInMoveDialog }   selectTreeItem={selectTargetCategory}  />
	</MoveCategory> 
}



/******* S.D.G. *******/



