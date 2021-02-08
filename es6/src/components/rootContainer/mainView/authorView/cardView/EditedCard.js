/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/





import { div, h1, label, input, table, tbody, ul, li, tr, td } from "../../../../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["EDITEDCARD"]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "cardId"
			}, ["CARDID"]), 
			input({
				id: "cardId",
				value: attributes.cardId, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.cardId])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "given"
			}, ["GIVEN"]), 
			input({
				id: "given",
				value: attributes.given, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.given])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "wanted"
			}, ["WANTED"]), 
			input({
				id: "wanted",
				value: attributes.wanted, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.wanted])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "index"
			}, ["INDEX"]), 
			input({
				id: "index",
				value: attributes.index, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.index])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "image"
			}, ["IMAGE"]), 
			input({
				id: "image",
				value: attributes.image, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.image])
		])
	]);
}



/******* S.D.G. *******/



