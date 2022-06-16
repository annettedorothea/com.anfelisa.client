/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { CategoryTree } from "../../../../../src/components/rootContainer/mainView/authorView/CategoryTree";
import { RootCategoryContainer } from "./categoryTree/RootCategoryContainer";
import { CategoryDialogContainer } from "./categoryTree/CategoryDialogContainer";
import { InviteUserDialogContainer } from "./categoryTree/InviteUserDialogContainer";
import { InviteUserEditableDialogContainer } from "./categoryTree/InviteUserEditableDialogContainer";
import { DeleteCategoryDialogContainer } from "./categoryTree/DeleteCategoryDialogContainer";


export const CategoryTreeContainer = ( props ) => {
	
	return <CategoryTree {...props}>
		<RootCategoryContainer {...props.rootCategory }   />
		<CategoryDialogContainer {...props.categoryDialog }   />
		<InviteUserDialogContainer {...props.inviteUserDialog }   />
		<InviteUserEditableDialogContainer {...props.inviteUserEditableDialog }   />
		<DeleteCategoryDialogContainer {...props.deleteCategoryDialog }   />
	</CategoryTree> 
}



/******* S.D.G. *******/



