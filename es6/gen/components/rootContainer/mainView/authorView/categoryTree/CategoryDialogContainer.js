/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { CategoryDialog } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/CategoryDialog";
import { cancelCategoryDialog } from "../../../../../category/ActionFunctions";
import { categoryNameChanged } from "../../../../../category/ActionFunctions";
import { createCategory } from "../../../../../category/ActionFunctions";
import { updateCategory } from "../../../../../category/ActionFunctions";


export const CategoryDialogContainer = ( props ) => {
	
	return <CategoryDialog {...props} cancelCategoryDialog={cancelCategoryDialog} categoryNameChanged={categoryNameChanged} createCategory={createCategory} updateCategory={updateCategory}  /> 
}



/******* S.D.G. *******/



