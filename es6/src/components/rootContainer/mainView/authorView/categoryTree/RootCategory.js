/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/





import { div, h1, label, input, table, tbody, ul, li, tr, td } from "../../../../../../gen/components/ReactHelper";

export function uiElement(attributes) {
	return div({}, [
		h1({}, ["ROOTCATEGORY"]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "categoryId"
			}, ["CATEGORYID"]), 
			input({
				id: "categoryId",
				value: attributes.categoryId, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.categoryId])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "categoryName"
			}, ["CATEGORYNAME"]), 
			input({
				id: "categoryName",
				value: attributes.categoryName, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.categoryName])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "categoryIndex"
			}, ["CATEGORYINDEX"]), 
			input({
				id: "categoryIndex",
				value: attributes.categoryIndex, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.categoryIndex])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "empty"
			}, ["EMPTY"]), 
			input({
				id: "empty",
				value: attributes.empty, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.empty])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "parentCategoryId"
			}, ["PARENTCATEGORYID"]), 
			input({
				id: "parentCategoryId",
				value: attributes.parentCategoryId, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.parentCategoryId])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "dictionaryLookup"
			}, ["DICTIONARYLOOKUP"]), 
			input({
				id: "dictionaryLookup",
				value: attributes.dictionaryLookup, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.dictionaryLookup])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "givenLanguage"
			}, ["GIVENLANGUAGE"]), 
			input({
				id: "givenLanguage",
				value: attributes.givenLanguage, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.givenLanguage])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "wantedLanguage"
			}, ["WANTEDLANGUAGE"]), 
			input({
				id: "wantedLanguage",
				value: attributes.wantedLanguage, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.wantedLanguage])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "rootCategoryId"
			}, ["ROOTCATEGORYID"]), 
			input({
				id: "rootCategoryId",
				value: attributes.rootCategoryId, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.rootCategoryId])
		]),
		div({}, [
			ul({class: ""}, [
				attributes.childCategories.map((item) => li({}, [item]))
			])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "nonScheduledCount"
			}, ["NONSCHEDULEDCOUNT"]), 
			input({
				id: "nonScheduledCount",
				value: attributes.nonScheduledCount, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.nonScheduledCount])
		]),
		div({class: ""}, [
			label({
				class: "",
				htmlFor: "editable"
			}, ["EDITABLE"]), 
			input({
				id: "editable",
				value: attributes.editable, 
				class: "", 
				onChange:(e) => console.log(e.target.value),
				type: "text"
			}), 
			div({class: ""}, [attributes.editable])
		])
	]);
}



/******* S.D.G. *******/



