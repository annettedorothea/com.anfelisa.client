/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { Buttons } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/Buttons";
import { Back } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Back";
import { New } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/New";
import { Edit } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Edit";
import { Delete } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Delete";
import { Move } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Move";
import { ToggleOrderUp } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/ToggleOrderUp";
import { ToggleOrderDown } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/ToggleOrderDown";
import { Invite } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Invite";
import { Reverse } from "../../../../../../src/components/rootContainer/mainView/authorView/categoryTree/buttons/Reverse";
import { routeToDefault } from "../../../../../common/ActionFunctions";
import { newCategoryClick } from "../../../../../category/ActionFunctions";
import { editCategoryClick } from "../../../../../category/ActionFunctions";
import { deleteCategoryClick } from "../../../../../category/ActionFunctions";
import { moveCategoryClicked } from "../../../../../category/ActionFunctions";
import { toggleCategoryOrder } from "../../../../../category/ActionFunctions";
import { inviteUserClick } from "../../../../../category/ActionFunctions";
import { createReverseBox } from "../../../../../category/ActionFunctions";


export const ButtonsContainer = ( props ) => {
	
	return <Buttons {...props} >
		<Back {...props.back }   onClick={routeToDefault}  />
		<New {...props.new }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={newCategoryClick}  />
		<Edit {...props.edit }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={editCategoryClick}  />
		<Delete {...props.delete }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={deleteCategoryClick}  />
		<Move {...props.move }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={moveCategoryClicked}  />
		<ToggleOrderUp {...props.toggleOrderUp }  rootCategory={props.rootCategory}  onClick={toggleCategoryOrder}  />
		<ToggleOrderDown {...props.toggleOrderDown }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={toggleCategoryOrder}  />
		<Invite {...props.invite }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory}  onClick={inviteUserClick}  />
		<Reverse {...props.reverse }  selectedCategory={props.selectedCategory} rootCategory={props.rootCategory} reverseBoxExists={props.reverseBoxExists}  onClick={createReverseBox}  />
	</Buttons> 
}



/******* S.D.G. *******/



