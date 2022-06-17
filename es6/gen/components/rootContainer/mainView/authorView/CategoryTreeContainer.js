/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { CategoryTree } from "../../../../../src/components/rootContainer/mainView/authorView/CategoryTree";
import { ButtonsContainer } from "./categoryTree/ButtonsContainer";
import { FilterContainer } from "./categoryTree/FilterContainer";
import { RootCategoryContainer } from "./categoryTree/RootCategoryContainer";
import { CategoryDialogContainer } from "./categoryTree/CategoryDialogContainer";
import { InviteUserDialogContainer } from "./categoryTree/InviteUserDialogContainer";
import { InviteUserEditableDialogContainer } from "./categoryTree/InviteUserEditableDialogContainer";
import { DeleteCategoryDialogContainer } from "./categoryTree/DeleteCategoryDialogContainer";
import { checkDropAllowed } from "../../../../category/ActionFunctions";
import { collapseTreeItem } from "../../../../category/ActionFunctions";
import { expandTreeItem } from "../../../../category/ActionFunctions";
import { itemDropped } from "../../../../category/ActionFunctions";
import { moveCategoryStarted } from "../../../../category/ActionFunctions";
import { selectTreeItem } from "../../../../category/ActionFunctions";
import { cancelCategoryDialog } from "../../../../category/ActionFunctions";
import { categoryNameChanged } from "../../../../category/ActionFunctions";
import { createCategory } from "../../../../category/ActionFunctions";
import { updateCategory } from "../../../../category/ActionFunctions";
import { cancelInviteUser } from "../../../../category/ActionFunctions";
import { invitedUsernameChanged } from "../../../../category/ActionFunctions";
import { inviteUserNextStep } from "../../../../category/ActionFunctions";
import { inviteUser } from "../../../../category/ActionFunctions";
import { inviteUserChangeEditable } from "../../../../category/ActionFunctions";
import { cancelDeleteCategory } from "../../../../category/ActionFunctions";
import { deleteCategory } from "../../../../category/ActionFunctions";


export const CategoryTreeContainer = ( props ) => {
	
	return <CategoryTree {...props} >
		<ButtonsContainer {...props.buttons }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory} reverseBoxExists={props.reverseBoxExists}   />
		<FilterContainer {...props.filter }    />
		<RootCategoryContainer {...props.rootCategory }  selectedCategory={props.selectedCategory} dropAllowed={props.dropAllowed} dropTargetCategoryId={props.dropTargetCategoryId}  checkDropAllowed={checkDropAllowed} collapseTreeItem={collapseTreeItem} expandTreeItem={expandTreeItem} itemDropped={itemDropped} moveCategoryStarted={moveCategoryStarted} selectTreeItem={selectTreeItem}  />
		<CategoryDialogContainer {...props.categoryDialog }   cancelCategoryDialog={cancelCategoryDialog} categoryNameChanged={categoryNameChanged} createCategory={createCategory} updateCategory={updateCategory}  />
		<InviteUserDialogContainer {...props.inviteUserDialog }   cancelInviteUser={cancelInviteUser} invitedUsernameChanged={invitedUsernameChanged} inviteUserNextStep={inviteUserNextStep}  />
		<InviteUserEditableDialogContainer {...props.inviteUserEditableDialog }   cancelInviteUser={cancelInviteUser} inviteUser={inviteUser} inviteUserChangeEditable={inviteUserChangeEditable}  />
		<DeleteCategoryDialogContainer {...props.deleteCategoryDialog }   cancelDeleteCategory={cancelDeleteCategory} deleteCategory={deleteCategory}  />
	</CategoryTree> 
}



/******* S.D.G. *******/



