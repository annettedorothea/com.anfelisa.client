/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/





import { div, h1, label, input, table, tbody, ul, li, tr, td } from "../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["MESSAGE"]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "type"
			}, ["TYPE"]), 
			input({
				id: "type",
				value: attributes.type, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.type])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "text"
			}, ["TEXT"]), 
			input({
				id: "text",
				value: attributes.text, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.text])
		])
	]);
}



/******* S.D.G. *******/



