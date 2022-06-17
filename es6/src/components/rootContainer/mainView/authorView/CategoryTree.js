/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

export const CategoryTree = (props) => {
	return <>
		<h1>CategoryTree</h1>
		<ul>
			<li>filterNonScheduled: {props.filterNonScheduled !== null && props.filterNonScheduled !== undefined ? props.filterNonScheduled.toString() : ""}</li>
			<li>reverseBoxExists: {props.reverseBoxExists !== null && props.reverseBoxExists !== undefined ? props.reverseBoxExists.toString() : ""}</li>
			<li>priority: {props.priority !== null && props.priority !== undefined ? props.priority.toString() : ""}</li>
			<li>displayDeleteCategory: {props.displayDeleteCategory !== null && props.displayDeleteCategory !== undefined ? props.displayDeleteCategory.toString() : ""}</li>
			<li>dropAllowed: {props.dropAllowed !== null && props.dropAllowed !== undefined ? props.dropAllowed.toString() : ""}</li>
			<li>dropTargetCategoryId: {props.dropTargetCategoryId !== null && props.dropTargetCategoryId !== undefined ? props.dropTargetCategoryId.toString() : ""}</li>
		</ul>
		{props.children}
	</> 
}



/******* S.D.G. *******/



