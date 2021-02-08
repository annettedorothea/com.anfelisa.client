/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/





import { div, h1, label, input, table, tbody, ul, li, tr, td, boxListItem, deleteBox } from "../../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["DASHBOARDVIEW"]),
		div({}, [
			table({class: ""}, [
				tbody({}, [
					attributes.boxList.map((item) => boxListItem({ ...item.mainView, language: item.language }))
				])
			])
		]),
		deleteBox({ ...attributes.mainView, language: attributes.language })
	]);
}



/******* S.D.G. *******/



